// ============================================================================
// CONTENIDO DEL SITIO — edita aquí, no en el markup.
// Todo vive en dos idiomas: `es` (principal) y `en`.
// ============================================================================

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];

/**
 * El blog está apagado por ahora: no aparece en el menú, ni en la home, ni en
 * el pie, ni en el dock, ni en el sitemap. El código y los textos siguen ahí.
 * Para encenderlo otra vez: pon `true` aquí y quita el filtro de /blog en
 * astro.config.mjs.
 */
export const BLOG_ENABLED = false;

export const site = {
  name: 'Wilberto Dzul',
  domain: 'wilbertodzul.com',
  url: 'https://wilbertodzul.com',
  email: 'wilberto.dzul@gmail.com',
  github: 'https://github.com/wilberto-dzul',
  linkedin: 'https://www.linkedin.com/in/wilberto-dzul/',
};

/** Prefijo de ruta por idioma: es → "", en → "/en" */
export const base = (lang: Lang) => (lang === 'es' ? '' : '/en');

export const ui = {
  es: {
    langLabel: 'EN',
    langTitle: 'Read in English',
    themeTitle: 'Cambiar tema',
    skip: 'Saltar al contenido',
    nav: [
      { href: '#trabajo', label: 'Trabajo' },
      { href: '#trayectoria', label: 'Trayectoria' },
      { href: '/blog', label: 'Escribo' },
      { href: '#contacto', label: 'Contacto' },
    ],
    readMore: 'Leer',
    backToBlog: '← Todos los textos',
    backHome: '← Inicio',
    minRead: 'min de lectura',
    updated: 'Actualizado',
    draft: 'Borrador',
    rights: 'Hecho en Mérida, Yucatán.',
    builtWith: 'Astro, sin frameworks de UI ni analítica que te siga.',
    notFound: {
      title: 'Esta página no existe',
      text: 'El enlace se rompió o la página cambió de lugar.',
    },
  },
  en: {
    langLabel: 'ES',
    langTitle: 'Leer en español',
    themeTitle: 'Toggle theme',
    skip: 'Skip to content',
    nav: [
      { href: '#trabajo', label: 'Work' },
      { href: '#trayectoria', label: 'Career' },
      { href: '/en/blog', label: 'Writing' },
      { href: '#contacto', label: 'Contact' },
    ],
    readMore: 'Read',
    backToBlog: '← All writing',
    backHome: '← Home',
    minRead: 'min read',
    updated: 'Updated',
    draft: 'Draft',
    rights: 'Made in Mérida, Yucatán.',
    builtWith: 'Astro, no UI framework, no analytics following you around.',
    notFound: {
      title: 'This page does not exist',
      text: 'The link broke or the page moved.',
    },
  },
} as const;

export const copy = {
  es: {
    title: 'Wilberto Dzul — Arquitecto de software y AI full-stack',
    description:
      'Arquitecto de software y AI Full-Stack Engineer en Mérida. Construyendo producto de punta a punta desde 2010, CTO de tres compañías y co-fundador de dos; hoy, flotas de agentes de IA que abren pull requests solas.',
    plateMeta: ['Mérida, Yucatán', 'Arquitecto de software · AI full-stack', 'Desde 2010'],
    lede: 'Llevo más de quince años construyendo software. Hoy una parte la escriben <em>agentes que yo dirijo</em>.',
    intro: [
      'Hoy soy <strong>AI Full-Stack Engineer en QuestionPro</strong> y arquitecto de software. Antes fui <strong>CTO de tres compañías</strong> —co-fundador en dos de ellas, la primera hace más de una década— y en algunas lo sigo siendo. Empecé con BASIC en la secundaria y pasé por C, C++, Java, PHP y JavaScript antes de salir de la universidad. Desde entonces he construido en casi todo lo que se cruzó —desktop, Android, PWAs, web, .NET, Visual Basic, hasta FoxPro— y siempre de punta a punta: del esquema de la base de datos al pixel final.',
      'Me buscan cuando algo tiene que existir completo y no hay a quién delegárselo: el modelo de datos, la arquitectura, el pipeline, la interfaz y —sobre todo— la decisión de qué no construir.',
    ],
    ctaPrimary: 'Escríbeme',
    ctaSecondary: 'LinkedIn',

    ahora: {
      num: '01',
      title: 'Ahora',
      body: [
        'De día, producto con IA en <strong>QuestionPro</strong>: una plataforma de research que usan miles de organizaciones. Además de features, automatizo el propio ciclo de desarrollo con agentes.',
        'Fuera de horas construyo una suite para el micro-negocio mexicano y un estudio de video generativo que corre completo en mi GPU. Entreno funcional, corro, y sigo viviendo en Mérida.',
      ],
    },

    trabajo: {
      num: '02',
      title: 'Trabajo',
      intro:
        'Casi todo lo que construyo hoy es privado o de cliente, así que aquí cuento el problema y la decisión en vez de enlazar un repo vacío.',
      cases: [
        {
          title: 'Una flota de agentes que abre pull requests sola',
          meta: '2025 — hoy · diseño y operación',
          body: 'Un orquestador corre varios agentes en paralelo, cada uno en su contenedor con su clon de git. Un poller toma issues etiquetados de GitHub, lanza al agente dentro del contenedor y este implementa, commitea y abre el PR. Un segundo agente atiende el code review, corrige lo que marcó el revisor y mergea cuando queda limpio.',
          note: '<b>Lo difícil no fue el prompt.</b> Fue el manejo de fallos: tareas que se quedan bloqueadas esperando un carril, ramas paralelas que chocan al mergear, agentes que hacen el trabajo pero no lo marcan como hecho. Ese 80% del código —el que nadie enseña en los demos— es el que decide si la flota sirve o solo hace ruido.',
          tags: ['Claude Code', 'MCP', 'Docker', 'GitHub API', 'TypeScript', 'SQLite'],
        },
      ],
    },

    trayectoria: {
      num: '03',
      title: 'Trayectoria',
      jobs: [
        {
          company: 'QuestionPro',
          url: 'https://www.questionpro.com',
          role: 'AI Full-Stack Engineer',
          date: '2025 — hoy',
          desc: 'Producto con IA sobre una plataforma global de research y experiencia, y automatización del ciclo de desarrollo con agentes. Segunda etapa aquí: la primera fue en 2022.',
        },
        {
          company: 'The Palace Company',
          url: 'https://www.palaceresorts.com',
          role: 'Arquitecto de software · Ventas',
          date: '2023 — 2025',
          desc: 'Arquitecto del área de ventas de uno de los grupos hoteleros más grandes de México: los tres canales —agencias, público directo y call center— sobre una misma central de reservaciones (CRS) y un mismo motor de tarifas. Por ahí entra el ingreso del grupo.',
        },
        {
          company: 'TuDashboard',
          role: 'Co-fundador & CTO',
          date: '2022 — 2024',
          desc: 'SaaS multi-tenant de dashboards y activación de campañas para marcas. Producto, arquitectura y equipo al mismo tiempo.',
        },
        {
          company: 'MailVibes',
          role: 'Co-fundador & CTO',
          date: '2019 — 2022',
          desc: 'Email tracking y notificaciones en tiempo real con extensión de Chrome. Del MVP a producción.',
        },
        {
          company: 'Swapwink',
          role: 'CTO',
          date: '2014 — 2019',
          desc: 'Dirección de los equipos de web, móvil y cloud: estándares, arquitectura y entrega.',
        },
        {
          company: 'Primeros años',
          role: 'Desarrollador móvil · Analista programador',
          date: '2010 — 2014',
          desc: 'Cytron, OpeSystems y Productos de Harina (Galletas Dondé), en Mérida: una app para BlackBerry en J2ME, un sistema de distribución y logística, y mantenimiento de sistemas corporativos que no podían dejar de funcionar (SAP, Dynamics CRM, SharePoint, Visual FoxPro).',
        },
        {
          company: 'Universidad Autónoma de Yucatán',
          role: 'Ingeniería de Software · Facultad de Matemáticas',
          date: '2005 — 2010',
          desc: 'Licenciatura. Prácticas y servicio social programando desde 2008.',
        },
      ],
    },

    escribo: {
      num: '04',
      title: 'Escribo',
      intro: 'Notas sobre agentes, arquitectura y construir producto solo.',
      all: 'Todos los textos →',
      empty: 'Los primeros textos están en camino.',
    },

    contacto: {
      num: '05',
      title: 'Contacto',
      body: 'Si tienes algo que construir —o algo construido que ya no aguanta— escríbeme directo. Leo todos los correos.',
    },
  },

  en: {
    title: 'Wilberto Dzul — Software architect & AI full-stack engineer',
    description:
      'Software architect and AI full-stack engineer based in Mérida, Mexico. Shipping product end to end since 2010, CTO at three companies and co-founder of two; today, fleets of AI agents that open pull requests on their own.',
    plateMeta: ['Mérida, Mexico', 'Software architect · AI full-stack', 'Since 2010'],
    lede: 'I have been building software for over fifteen years. Today part of it is written by <em>agents I direct</em>.',
    intro: [
      'Today I am an <strong>AI full-stack engineer at QuestionPro</strong> and a software architect. Before that I was <strong>CTO at three companies</strong> —co-founder at two of them, the first over a decade ago— and still am at some. I started with BASIC in secondary school and went through C, C++, Java, PHP and JavaScript before leaving university. Since then I have built on just about everything that came my way —desktop, Android, PWAs, web, .NET, Visual Basic, even FoxPro— and always end to end: from the database schema to the final pixel.',
      'People come to me when something has to exist completely and there is no one to delegate it to: the data model, the architecture, the pipeline, the interface and —above all— the decision of what not to build.',
    ],
    ctaPrimary: 'Email me',
    ctaSecondary: 'LinkedIn',

    ahora: {
      num: '01',
      title: 'Now',
      body: [
        'By day, AI product work at <strong>QuestionPro</strong>: a research platform used by thousands of organizations. Beyond features, I automate the development cycle itself with agents.',
        'After hours I build a product suite for Mexican micro-businesses and a generative video studio that runs entirely on my own GPU. I train, I run, and I still live in Mérida.',
      ],
    },

    trabajo: {
      num: '02',
      title: 'Work',
      intro:
        'Most of what I build today is private or client work, so here I describe the problem and the decision instead of linking an empty repo.',
      cases: [
        {
          title: 'A fleet of agents that opens pull requests on its own',
          meta: '2025 — present · design and operation',
          body: 'An orchestrator runs several agents in parallel, each in its own container with its own git clone. A poller picks up labeled GitHub issues, launches the agent inside the container, and it implements, commits and opens the PR. A second agent handles code review, fixes what the reviewer flagged, and merges once it is clean.',
          note: '<b>The hard part was not the prompt.</b> It was failure handling: tasks stuck waiting for a lane, parallel branches that collide on merge, agents that do the work but never mark it done. That 80% of the code —the part no demo shows— is what decides whether the fleet is useful or just noise.',
          tags: ['Claude Code', 'MCP', 'Docker', 'GitHub API', 'TypeScript', 'SQLite'],
        },
      ],
    },

    trayectoria: {
      num: '03',
      title: 'Career',
      jobs: [
        {
          company: 'QuestionPro',
          url: 'https://www.questionpro.com',
          role: 'AI Full-Stack Engineer',
          date: '2025 — present',
          desc: 'AI product work on a global research and experience platform, plus development-cycle automation with agents. Second stint here: the first was in 2022.',
        },
        {
          company: 'The Palace Company',
          url: 'https://www.palaceresorts.com',
          role: 'Software architect · Sales',
          date: '2023 — 2025',
          desc: 'Architect for the sales domain at one of the largest hospitality groups in Mexico: all three channels —travel agencies, direct public booking and the call center— on a single central reservation system and one rates engine. That is where the group’s revenue comes in.',
        },
        {
          company: 'TuDashboard',
          role: 'Co-founder & CTO',
          date: '2022 — 2024',
          desc: 'Multi-tenant SaaS for brand dashboards and campaign activation. Product, architecture and team at once.',
        },
        {
          company: 'MailVibes',
          role: 'Co-founder & CTO',
          date: '2019 — 2022',
          desc: 'Email tracking and real-time notifications with a Chrome extension. From MVP to production.',
        },
        {
          company: 'Swapwink',
          role: 'CTO',
          date: '2014 — 2019',
          desc: 'Led the web, mobile and cloud teams: standards, architecture and delivery.',
        },
        {
          company: 'Early years',
          role: 'Mobile developer · Programmer analyst',
          date: '2010 — 2014',
          desc: 'Cytron, OpeSystems and Productos de Harina (Galletas Dondé), in Mérida: a BlackBerry app in J2ME, a distribution and logistics system, and maintenance of corporate systems that could not go down (SAP, Dynamics CRM, SharePoint, Visual FoxPro).',
        },
        {
          company: 'Universidad Autónoma de Yucatán',
          role: 'B.Sc. Software Engineering',
          date: '2005 — 2010',
          desc: 'Bachelor’s degree. Writing code in internships and social service from 2008.',
        },
      ],
    },

    escribo: {
      num: '04',
      title: 'Writing',
      intro: 'Notes on agents, architecture, and building product alone.',
      all: 'All writing →',
      empty: 'First pieces are on the way.',
    },

    contacto: {
      num: '05',
      title: 'Contact',
      body: 'If you have something to build —or something built that no longer holds— email me directly. I read everything.',
    },
  },
} as const;

// ============================================================================
// DzulOS — textos del escritorio. El contenido de las ventanas sale de `copy`;
// aquí vive solo la interfaz del sistema.
// ============================================================================

export const os = {
  es: {
    lang: { label: 'EN', title: 'Read in English', href: '/en/' },
    locale: 'es-MX',
    exit: 'Ver versión clásica →',
    exitHref: '/clasico',
    bar: ['Perfil', 'Trabajo', 'Trayectoria', 'Contacto'],
    lights: { close: 'Cerrar', min: 'Minimizar', zoom: 'Maximizar' },
    menuTitle: 'Ver el sitio como…',
    menu: {
      dev: ['Técnico', 'terminal + flota de agentes'],
      reclutador: ['Reclutador', 'trayectoria y responsabilidades'],
      negocio: ['Negocio', 'qué resuelvo y cómo contactarme'],
      reask: ['Preguntarme otra vez', 'vuelve al selector'],
    },
    labels: { curioso: 'visitante', dev: 'técnico', reclutador: 'reclutador', negocio: 'negocio' },
    win: {
      perfil: 'perfil — quién soy',
      trabajo: 'trabajo — casos',
      trayectoria: 'trayectoria — cv',
      contacto: 'contacto',
      agentes: 'flota — orquestador',
      terminal: 'wilberto@dzulos — zsh',
    },
    dock: ['Terminal', 'Flota', 'Perfil', 'Trabajo', 'Trayectoria', 'Contacto'],
    ask: {
      title: '¿Qué te trae por aquí?',
      text: 'Para abrirte lo que te sirve y no hacerte buscar. Puedes cambiarlo cuando quieras.',
      dev: ['Vengo a lo técnico', 'Cómo construyo: la flota de agentes, decisiones y trade-offs. Abre la terminal.'],
      reclutador: ['Estoy evaluando tu perfil', 'Trayectoria completa, fechas, responsabilidades y stack.'],
      negocio: ['Tengo algo que construir', 'Qué resuelvo, cómo trabajo y cómo contactarme.'],
      skip: 'Solo estoy curioseando →',
    },
    term: {
      aria: 'Escribe un comando',
      welcome: [
        'DzulOS 1.0 — terminal',
        '',
        'Esto no es decorado: los comandos leen el mismo contenido del sitio.',
        'Escribe ayuda para ver qué hay. Prueba con: whoami',
        '',
      ],
      help: [
        'comandos disponibles',
        '  whoami        quién soy en tres líneas',
        '  casos         en qué he trabajado y qué decidí',
        '  cv            trayectoria completa',
        '  flota         ver la flota de agentes trabajando',
        '  contacto      cómo escribirme',
        '  abrir <app>   perfil | trabajo | trayectoria | contacto | agentes',
        '  perfil <tipo> dev | reclutador | negocio',
        '  idioma        cambiar a inglés',
        '  clasico       ir a la versión sin escritorio',
        '  limpiar       borrar la pantalla',
      ],
      opening: 'abriendo',
      openingFleet: 'abriendo la flota…',
      noApp: 'no existe la app',
      useProfile: 'uso: perfil dev | reclutador | negocio',
      notFound: 'comando no encontrado',
      hint: 'escribe "ayuda"',
      sudo: 'nice try. aquí el único con permisos de root es el que paga el dominio.',
    },
    boot: [
      'DzulOS 1.0 · Mérida, Yucatán',
      '',
      'montando /trayectoria ............... ok',
      'poller · buscando issues listos ..... ok',
      'lane-1 · clon de git ................ ok',
      'lane-2 · agente implementando ....... ok',
      'review · PR limpio → merge .......... ok',
      '',
      'sistema en línea.',
    ],
    fleet: {
      stats: ['PRs abiertos', 'mergeados', 'en cola', 'turno'],
      waiting: 'esperando…',
      free: 'libre',
      stuck: 'conflicto',
      note: 'Reconstrucción del pipeline que opero: poller → carril aislado → PR → review automático → merge. La mecánica y los modos de falla son reales; los issues son de ejemplo, porque los repos son privados.',
      steps: [
        'clonando repo',
        'leyendo el issue',
        'implementando',
        'commit + push',
        'PR abierto',
        'en review',
        'corrigiendo lo marcado',
        'merge',
      ],
      issues: [
        '#482 el filtro de fechas ignora la zona horaria',
        '#487 exportar a CSV rompe con acentos',
        '#491 el webhook se pasa del rate limit',
        '#495 la migración 0031 falla en base nueva',
        '#498 timeout en el reporte mensual',
        '#503 el token de servicio expira sin avisar',
        '#507 dos agentes toman el mismo issue',
        '#511 el retry descarta el commit bueno',
      ],
      ev: {
        sys: 'sistema',
        up: 'orquestador arriba · 3 carriles, contenedores aislados',
        queue: 'cola recargada:',
        queueTail: 'issues listos',
        pr: 'PR abierto para',
        clash: 'choque al mergear con otra rama',
        fixed: 'conflicto resuelto, reintentando merge',
        merged: 'mergeado',
        mergedTail: '· carril libre',
      },
    },
  },

  en: {
    lang: { label: 'ES', title: 'Leer en español', href: '/' },
    locale: 'en-US',
    exit: 'See the classic version →',
    exitHref: '/en/clasico',
    bar: ['Profile', 'Work', 'Career', 'Contact'],
    lights: { close: 'Close', min: 'Minimize', zoom: 'Maximize' },
    menuTitle: 'View this site as…',
    menu: {
      dev: ['Engineer', 'terminal + agent fleet'],
      reclutador: ['Recruiter', 'career, dates and responsibilities'],
      negocio: ['Business', 'what I solve and how to reach me'],
      reask: ['Ask me again', 'back to the picker'],
    },
    labels: { curioso: 'visitor', dev: 'engineer', reclutador: 'recruiter', negocio: 'business' },
    win: {
      perfil: 'profile — who I am',
      trabajo: 'work — case notes',
      trayectoria: 'career — cv',
      contacto: 'contact',
      agentes: 'fleet — orchestrator',
      terminal: 'wilberto@dzulos — zsh',
    },
    dock: ['Terminal', 'Fleet', 'Profile', 'Work', 'Career', 'Contact'],
    ask: {
      title: 'What brings you here?',
      text: 'So I open what is useful to you instead of making you dig. You can change it anytime.',
      dev: ['I am here for the technical side', 'How I build: the agent fleet, decisions and trade-offs. Opens the terminal.'],
      reclutador: ['I am evaluating your profile', 'Full career, dates, responsibilities and stack.'],
      negocio: ['I have something to build', 'What I solve, how I work and how to reach me.'],
      skip: 'Just looking around →',
    },
    term: {
      aria: 'Type a command',
      welcome: [
        'DzulOS 1.0 — terminal',
        '',
        'Not a prop: these commands read the same content as the site.',
        'Type help to see what is here. Try: whoami',
        '',
      ],
      help: [
        'available commands',
        '  whoami        who I am in three lines',
        '  cases         what I have built and what I decided',
        '  cv            full career',
        '  fleet         watch the agent fleet working',
        '  contact       how to reach me',
        '  open <app>    profile | work | career | contact | fleet',
        '  profile <t>   dev | recruiter | business',
        '  lang          switch to Spanish',
        '  classic       go to the version without a desktop',
        '  clear         wipe the screen',
      ],
      opening: 'opening',
      openingFleet: 'opening the fleet…',
      noApp: 'no such app',
      useProfile: 'usage: profile dev | recruiter | business',
      notFound: 'command not found',
      hint: 'type "help"',
      sudo: 'nice try. the only one with root around here is whoever pays for the domain.',
    },
    boot: [
      'DzulOS 1.0 · Mérida, Mexico',
      '',
      'mounting /career .................... ok',
      'poller · looking for ready issues ... ok',
      'lane-1 · git clone .................. ok',
      'lane-2 · agent implementing ......... ok',
      'review · clean PR → merge ........... ok',
      '',
      'system online.',
    ],
    fleet: {
      stats: ['open PRs', 'merged', 'queued', 'shift'],
      waiting: 'waiting…',
      free: 'free',
      stuck: 'conflict',
      note: 'A reconstruction of the pipeline I run: poller → isolated lane → PR → automated review → merge. The mechanics and the failure modes are real; the issues are examples, because the repos are private.',
      steps: [
        'cloning repo',
        'reading the issue',
        'implementing',
        'commit + push',
        'PR opened',
        'in review',
        'fixing review notes',
        'merge',
      ],
      issues: [
        '#482 date filter ignores the time zone',
        '#487 CSV export breaks on accents',
        '#491 the webhook blows past the rate limit',
        '#495 migration 0031 fails on a fresh database',
        '#498 timeout on the monthly report',
        '#503 the service token expires silently',
        '#507 two agents pick up the same issue',
        '#511 the retry throws away the good commit',
      ],
      ev: {
        sys: 'system',
        up: 'orchestrator up · 3 lanes, isolated containers',
        queue: 'queue reloaded:',
        queueTail: 'ready issues',
        pr: 'PR opened for',
        clash: 'merge clash with another branch',
        fixed: 'conflict resolved, retrying merge',
        merged: 'merged',
        mergedTail: '· lane free',
      },
    },
  },
} as const;
