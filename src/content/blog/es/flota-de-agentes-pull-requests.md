---
title: 'Una flota de agentes que abre pull requests: lo que no sale en el demo'
description: 'Llevo meses con agentes de IA tomando issues de GitHub y abriendo PRs solos. El código interesante nunca fue el prompt: fue todo lo que pasa cuando algo falla.'
date: 2026-08-03
tags: ['Agentes', 'Claude Code', 'Docker', 'Automatización']
draft: true
---

Todos los demos de agentes que programan terminan igual: alguien escribe una tarea,
el agente piensa un rato, aparece un pull request verde y la sala aplaude. Yo también
hice ese demo. Funcionó a la primera y me duró exactamente una tarde.

Lo que vino después —meses de tener agentes corriendo de verdad contra un repo real,
con issues reales y compañeros humanos revisando— es de lo que casi nadie escribe.
Va aquí.

## Lo que construí

La forma es simple de describir: un *poller* revisa cada tanto los issues etiquetados
como listos, toma el siguiente y lo despacha a un **carril** libre. Cada carril es un
contenedor Docker con su propio clon del repo, sus propias credenciales y su propio
límite de CPU. Dentro del contenedor corre un agente de código que lee el issue,
implementa, commitea y abre el pull request.

Cuando llega el code review —lo hace otro agente, con su propio criterio— un tercer
proceso vuelve a entrar al carril, corrige lo que marcó el revisor, pide re-review y
mergea si quedó limpio.

Dicho así suena a tres scripts. Y los tres scripts existen. Solo que el 80% de sus
líneas no habla de agentes: habla de qué hacer cuando algo se rompe.

## Aísla de verdad, no "casi"

Mi primera versión usaba *git worktrees* para que los carriles compartieran un solo
clon. Es lo elegante: un `.git`, varios directorios de trabajo, poco disco.

Dentro de un contenedor eso se cae. El worktree guarda una referencia al repo padre
por ruta absoluta, y cuando esa ruta significa algo distinto adentro y afuera del
contenedor, git empieza a comportarse de formas creativas. Perdí más tiempo
depurando ese acoplamiento que el que ahorré en disco.

La versión que funciona es aburrida: **cada carril es un clon completo e
independiente**. Cuesta unos gigas y no vuelve a fallar. Es el mismo principio de
siempre —aislar procesos que corren en paralelo— solo que uno tiende a olvidarlo
cuando el proceso paralelo es un agente y no un test.

## El estado interesante no es "hecho", es "bloqueado"

Un agente que trabaja bien no necesita supervisión. Un agente que falla **a medias**
es el que te quema la tarde. Estos son los modos de falla que terminé teniendo que
nombrar uno por uno:

- **Se queda esperando carril.** Todos ocupados; la tarea espera. Si el temporizador
  mide silencio en vez de duración, una tarea sana que tarda parece colgada y alguien
  la mata.
- **Termina sin dejar nada.** El agente concluye que no había nada que hacer —el
  cambio ya estaba— y sale con cero commits. Si tu script asume que siempre hay algo
  que empujar, revienta justo ahí y deja la tarea marcada como rota.
- **Hace el trabajo pero no lo reporta.** Commitea, abre el PR y jamás marca la tarea
  como terminada. Si tu reintento parte de cero, acabas de tirar trabajo bueno.
- **Se duplica.** El issue sigue viéndose "pendiente" mientras el PR está abierto, así
  que el poller lo vuelve a despachar. Dos agentes, el mismo issue, dos ramas que
  chocarán entre ellas.

Ninguno de esos casos es un problema de inteligencia del modelo. Todos son problemas
de **máquina de estados**: qué significa exactamente que una tarea esté en curso, y
quién tiene permiso de decir que terminó.

## Un agente revisando a otro agente sí cierra el ciclo

La parte que más me sorprendió: poner un segundo agente a revisar el PR del primero
no fue teatro. Encuentra cosas de verdad —casos borde no cubiertos, manejo de errores
ausente, el `TODO` que el primero se dejó puesto— y el ciclo de corregir-y-volver-a-
revisar converge en una o dos vueltas.

Lo que no puede hacer es sustituir el criterio de producto. El revisor te dice si el
código está bien escrito. No te dice si estabas construyendo lo correcto. Esa sigue
siendo tarea del que escribió el issue, y por eso hoy escribo issues muy distintos:
menos "arregla el bug del filtro" y más contexto, criterio de aceptación y qué **no**
quiero que toque.

## La credencial es un recurso compartido

Al principio los contenedores usaban mi propia sesión, la del host. Varios agentes,
la misma cuenta, en paralelo. Quemé tres cuentas antes de aceptar lo obvio: si un
proceso automático consume tu credencial, deja de ser tuya.

Hoy los contenedores usan una cuenta de servicio, con sus credenciales montadas
aparte de las mías. Es la misma higiene que aplicarías con una llave de API en
producción; solo que como la sesión parecía "mi login personal", tardé en verla como
lo que es: infraestructura.

## El techo del paralelismo no es el CPU

Uno asume que para correr más agentes en paralelo necesita más máquina. En mi caso el
límite llegó por otros dos lados, mucho antes que por el hardware:

**Los merges.** Dos agentes trabajando sobre el mismo módulo producen dos ramas que
se ven perfectas por separado y se pelean al integrar. Resolver ese conflicto cuesta
más que haber hecho las dos tareas en serie. Hoy, si dos issues tocan la misma zona,
los encadeno a propósito.

**La cuota.** El paralelismo real está limitado por cuántas sesiones concurrentes
puede sostener la cuenta que los agentes usan, no por cuántos contenedores levanta la
máquina.

## Lo que me llevo

Automatizar el ciclo issue → PR no se parece a "usar IA para programar". Se parece
mucho más a operar un sistema distribuido: aislamiento, estados explícitos,
reintentos idempotentes, credenciales con dueño y una cola que no despacha dos veces
el mismo trabajo.

Es decir: la parte difícil sigue siendo la ingeniería de siempre. La novedad es que
ahora uno de los procesos escribe código.

Y sí: cuando funciona, es raro y bonito abrir GitHub en la mañana y encontrar pull
requests que uno no escribió, esperando review.
