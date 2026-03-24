// ── i18n Translation System ──────────────────────────
const i18n = {
  es: {
    // Nav
    'nav.about': 'Sobre Mi',
    'nav.projects': 'Proyectos',
    'nav.music': 'Musica',
    'nav.blog': 'Blog',
    'nav.guestbook': 'Libro de Visitas',

    // Hero
    'hero.tag': 'Ingeniero de Automatizacion IA',
    'hero.heading': 'Hola, soy <span class="accent">Amal Yadav</span>.<br />Hago que la IA funcione<br />en <span class="accent">tu maquina.</span>',
    'hero.sub': 'Modelos de IA locales de hasta 9 mil millones de parametros. Pipelines de automatizacion personalizados. Sin nube. Sin suscripciones. Todo en tu propia PC.',
    'hero.cta1': 'Ver Proyectos',
    'hero.cta2': 'Saludar',
    'hero.kofi': '🍦 Invitame un helado',

    // Terminal
    'terminal.loaded': 'Modelo cargado localmente',
    'terminal.running': 'Pipeline ejecutandose...',
    'terminal.placeholder': "escribe 'help'",

    // About
    'about.title': 'Sobre Mi',
    'about.p1': 'Soy un Ingeniero de Automatizacion IA que cree que la IA poderosa no deberia necesitar una suscripcion en la nube. Me especializo en ejecutar modelos de lenguaje grandes localmente — hasta <strong>9 mil millones de parametros</strong> — y conectarlos en pipelines de automatizacion adaptados a tu flujo de trabajo.',
    'about.p2': 'Fuera de la ingenieria, escribo letras de canciones y compongo musica — y soy un jugador apasionado (main de Pokemon Unite). Ya sea IA, musica o gaming, me encanta construir cosas que parecen magia por fuera pero son artesania limpia por dentro.',

    // Tags
    'tag.automation': 'Automatizacion',
    'tag.songwriting': 'Composicion de Letras',
    'tag.composition': 'Composicion Musical',
    'tag.nosubs': 'Sin Suscripciones',
    'tag.privacy': 'Privacidad',
    'tag.journaling': 'Diario',
    'tag.writing': 'Escritura',
    'tag.strategy': 'Estrategia',
    'tag.lyrics': 'Letras',
    'tag.original': 'Musica Original',
    'tag.productivity': 'Productividad',

    // Now
    'now.title': 'Ahora',
    'now.updated': 'Actualizado Marzo 2026',
    'now.ai.title': 'Construyendo pipelines de IA locales',
    'now.ai.desc': 'Experimentando con Llama 3 y Phi-3 para flujos de automatizacion en el dispositivo.',
    'now.journal.title': 'Desarrollando AI Journal',
    'now.journal.desc': 'Agregando preguntas de reflexion y seguimiento de estado de animo a la app.',
    'now.music.title': 'Componiendo musica nueva',
    'now.music.desc': 'Trabajando en pistas originales — letras y melodias en progreso.',
    'now.gaming.title': 'Jugando Pokemon Unite',
    'now.gaming.desc': 'Subiendo en ranked y probando nuevas estrategias de equipo.',

    // Projects
    'projects.title': 'Proyectos',
    'projects.sub': 'Cosas que he construido — mas proximamente.',
    'projects.ai.title': 'IA Local — Hasta 9B Parametros',
    'projects.ai.desc': 'Ejecuta modelos de lenguaje grandes como Llama 3, Mistral y Phi-3 completamente en tu propio hardware. Incluye configuracion de modelos, wrappers de API y hooks de automatizacion. Cero datos salen de tu maquina.',
    'projects.journal.title': 'AI Journal',
    'projects.journal.desc': 'Una app de diario potenciada por IA para ayudarte a capturar y organizar tus pensamientos. Escribe libremente — la IA te ayuda a reflexionar, expandir y encontrar claridad en lo que has escrito.',
    'projects.pokemon.desc': 'Jugador apasionado de Pokemon Unite — estudio composicion de equipo, timing de objetivos y estrategia de linea. El gaming agudiza las mismas habilidades de reconocimiento de patrones y toma de decisiones que uso en ingenieria.',

    // Music
    'music.title': 'Musica',
    'music.desc': 'Escribo letras y compongo musica original. La composicion de canciones es donde combino narrativa con emocion — es el otro lado de la misma moneda creativa que construir software.',
    'music.tracks': 'Pistas',
    'music.t1': 'Composiciones Originales',
    'music.t2': 'Sesiones de Composicion',
    'music.t3': 'Letras y Melodias',
    'music.cta': '▶ Escuchar en YouTube',

    // Blog
    'blog.sub': 'Reflexiones sobre IA, musica, gaming y construccion de cosas.',
    'blog.date1': 'Marzo 2026',
    'blog.date2': 'Febrero 2026',
    'blog.date3': 'Enero 2026',
    'blog.post1.title': 'Ejecutando Llama 3 Localmente en una PC Economica',
    'blog.post1.body': 'No necesitas una GPU de $3,000 para ejecutar un modelo de 9 mil millones de parametros. He estado probando Llama 3 en hardware de gama media con Ollama y los resultados son sorprendentemente usables. La cuantizacion es la clave — un modelo Q4 cabe en 6 GB de RAM y aun produce salida coherente y util para tareas de automatizacion. Esto es lo que aprendi sobre elegir el tamano correcto de modelo para tu hardware.',
    'blog.post2.title': 'Por Que Construi un AI Journal',
    'blog.post2.body': 'Escribir un diario siempre me ha ayudado a pensar con claridad, pero queria algo que pudiera ayudarme a profundizar mas. Por eso construi AI Journal — una app donde la IA no escribe por ti, te ayuda a reflexionar sobre lo que ya has escrito. Piensa en ella como un companero de pensamiento que hace las preguntas correctas.',
    'blog.post3.title': 'Lo Que Pokemon Unite Me Enseno Sobre Estrategia',
    'blog.post3.body': 'Los MOBAs son esencialmente motores de decision en tiempo real. Cada partida en Pokemon Unite es una serie de compromisos: empujar una linea o disputar un objetivo? Farmear o pelear? Los mismos modelos mentales aplican a la ingenieria — asignacion de recursos, evaluacion de riesgos y saber cuando comprometerse. El gaming me hace mejor constructor.',

    // Guestbook
    'guestbook.title': 'Libro de Visitas',
    'guestbook.sub': 'Deja un mensaje, saluda o comparte tus pensamientos.',
    'guestbook.name': 'Tu nombre',
    'guestbook.email': 'Tu email',
    'guestbook.message': 'Deja un mensaje...',
    'guestbook.submit': 'Firmar el Libro',
  }
};

// English defaults are already in the HTML

let currentLang = 'en';

function detectLanguage() {
  // Check localStorage first
  const saved = localStorage.getItem('lang');
  if (saved) return saved;

  // Auto-detect Spanish speakers
  const langs = navigator.languages || [navigator.language || ''];
  for (const lang of langs) {
    if (lang.startsWith('es')) return 'es';
  }
  return 'en';
}

// Store original English text on first run
const originals = {};

function storeOriginals() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    originals[el.getAttribute('data-i18n')] = el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    originals[el.getAttribute('data-i18n-html')] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    originals[el.getAttribute('data-i18n-placeholder')] = el.placeholder;
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  html.setAttribute('lang', lang);
  localStorage.setItem('lang', lang);

  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang === 'es' ? 'ES' : 'EN';

  if (lang === 'es' && i18n.es) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n.es[key]) el.textContent = i18n.es[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (i18n.es[key]) el.innerHTML = i18n.es[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n.es[key]) el.placeholder = i18n.es[key];
    });
  } else {
    // Restore English
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (originals[key]) el.textContent = originals[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (originals[key]) el.innerHTML = originals[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (originals[key]) el.placeholder = originals[key];
    });
  }
}

// ── Theme Toggle ─────────────────────────────────────
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) html.setAttribute('data-theme', savedTheme);

toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ── Language Toggle ──────────────────────────────────
const langBtn = document.getElementById('langToggle');
langBtn.addEventListener('click', () => {
  const next = currentLang === 'en' ? 'es' : 'en';
  applyLanguage(next);
});

// ── Init i18n ────────────────────────────────────────
storeOriginals();
const detectedLang = detectLanguage();
applyLanguage(detectedLang);

// ── Nav active highlight on scroll ───────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--text)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ── Scroll-in animation ───────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .blog-post, .now-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, background 0.2s, box-shadow 0.2s';
  fadeObserver.observe(el);
});

const style = document.createElement('style');
style.textContent = `
  .project-card.visible, .blog-post.visible, .now-item.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// ── Interactive Terminal ──────────────────────────────
(function () {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');
  const body = document.getElementById('terminalBody');
  if (!input || !output) return;

  const cmdsEn = {
    help: () =>
      '<span class="t-accent">Available commands:</span>\n' +
      '  help      — show this message\n' +
      '  about     — who is Amal?\n' +
      '  projects  — list projects\n' +
      '  music     — music info\n' +
      '  pokemon   — Pokemon Unite\n' +
      '  now       — what I\'m up to\n' +
      '  neofetch  — system info\n' +
      '  ls        — list files\n' +
      '  date      — current date\n' +
      '  whoami    — you tell me\n' +
      '  clear     — clear terminal\n' +
      '  secret    — ???',

    about: () =>
      '<span class="t-accent">Amal Yadav</span>\n' +
      'AI Automation Engineer, songwriter,\n' +
      'music composer, Pokemon Unite player.\n' +
      'I make AI run on your machine.',

    projects: () =>
      '<span class="t-accent">Projects:</span>\n' +
      '  <span class="t-green">●</span> Local AI (up to 9B params)\n' +
      '  <span class="t-green">●</span> AI Journal\n' +
      '  <span class="t-green">●</span> Pokemon Unite strategies',

    music: () =>
      '<span class="t-accent">Music:</span>\n' +
      '  Songwriter & composer.\n' +
      '  Original lyrics & melodies.\n' +
      '  <span class="t-dim">→ Check out the Music section.</span>',

    pokemon: () =>
      '<span class="t-yellow">⚡ Pokemon Unite</span>\n' +
      '  Avid MOBA player.\n' +
      '  Studying team comp & objectives.\n' +
      '  Gaming = real-time strategy engine.',

    now: () =>
      '<span class="t-accent">Right now:</span>\n' +
      '  Building local AI pipelines\n' +
      '  Developing AI Journal app\n' +
      '  Composing new music\n' +
      '  Grinding Pokemon Unite ranked',

    neofetch: () =>
      '<span class="t-accent">amal</span>@<span class="t-accent">dev</span>\n' +
      '────────────────\n' +
      'OS:     macOS / Linux\n' +
      'Shell:  zsh\n' +
      'Stack:  Python, Ollama, JS\n' +
      'AI:     Llama 3, Phi-3, Mistral\n' +
      'Music:  Songwriter & Composer\n' +
      'Game:   Pokemon Unite\n' +
      'Lang:   ' + currentLang.toUpperCase() + '\n' +
      'Theme:  ' + html.getAttribute('data-theme'),

    ls: () =>
      'automate.py    llama3.gguf\n' +
      'journal.py     config.yaml\n' +
      'songs/         pokemon-notes/\n' +
      'README.md      .secrets 🔒',

    date: () =>
      '<span class="t-green">' + new Date().toLocaleString() + '</span>',

    whoami: () => 'You\'re a visitor. Welcome. 👋',
    sudo: () => '<span class="t-red">Nice try.</span> 🔒',
    rm: () => '<span class="t-red">Absolutely not.</span>',
    secret: () =>
      '<span class="t-yellow">🎮 Try the Konami code on this page...</span>\n' +
      '<span class="t-dim">↑ ↑ ↓ ↓ ← → ← → B A</span>',
    hello: () => '<span class="t-green">Hey there! 👋</span>\nWelcome to amal.dev',
    cat: () => '<span class="t-dim">🐱 meow</span>',
    exit: () => '<span class="t-dim">There is no escape. You\'re here forever.</span> 😄',
    matrix: () => {
      document.body.style.transition = 'filter 1s';
      document.body.style.filter = 'hue-rotate(90deg)';
      setTimeout(() => { document.body.style.filter = ''; }, 3000);
      return '<span class="t-green">Entering the matrix...</span>';
    },
    pikachu: () =>
      '<span class="t-yellow">    ⚡⚡\n' +
      '   (°o°)\n' +
      '   /|  |\\\n' +
      '    |  |\n' +
      '    d  b</span>\n' +
      'Pika pika!',
  };
  cmdsEn.hi = cmdsEn.hello;
  cmdsEn.gaming = cmdsEn.pokemon;
  cmdsEn.hola = cmdsEn.hello;

  const cmdsEs = {
    help: () =>
      '<span class="t-accent">Comandos disponibles:</span>\n' +
      '  help      — mostrar este mensaje\n' +
      '  about     — quien es Amal?\n' +
      '  projects  — listar proyectos\n' +
      '  music     — info de musica\n' +
      '  pokemon   — Pokemon Unite\n' +
      '  now       — que hago ahora\n' +
      '  neofetch  — info del sistema\n' +
      '  ls        — listar archivos\n' +
      '  date      — fecha actual\n' +
      '  whoami    — dime tu\n' +
      '  clear     — limpiar terminal\n' +
      '  secret    — ???',

    about: () =>
      '<span class="t-accent">Amal Yadav</span>\n' +
      'Ingeniero de Automatizacion IA,\n' +
      'compositor, letrista, jugador de\n' +
      'Pokemon Unite. Hago que la IA\n' +
      'funcione en tu maquina.',

    projects: () =>
      '<span class="t-accent">Proyectos:</span>\n' +
      '  <span class="t-green">●</span> IA Local (hasta 9B params)\n' +
      '  <span class="t-green">●</span> AI Journal\n' +
      '  <span class="t-green">●</span> Estrategias Pokemon Unite',

    music: () =>
      '<span class="t-accent">Musica:</span>\n' +
      '  Compositor y letrista.\n' +
      '  Letras y melodias originales.\n' +
      '  <span class="t-dim">→ Ve la seccion de Musica.</span>',

    pokemon: () =>
      '<span class="t-yellow">⚡ Pokemon Unite</span>\n' +
      '  Jugador apasionado de MOBA.\n' +
      '  Estudiando comp de equipo.\n' +
      '  Gaming = motor de estrategia.',

    now: () =>
      '<span class="t-accent">Ahora mismo:</span>\n' +
      '  Construyendo pipelines de IA\n' +
      '  Desarrollando AI Journal\n' +
      '  Componiendo musica nueva\n' +
      '  Subiendo en Pokemon Unite ranked',

    neofetch: () =>
      '<span class="t-accent">amal</span>@<span class="t-accent">dev</span>\n' +
      '────────────────\n' +
      'SO:     macOS / Linux\n' +
      'Shell:  zsh\n' +
      'Stack:  Python, Ollama, JS\n' +
      'IA:     Llama 3, Phi-3, Mistral\n' +
      'Musica: Compositor y Letrista\n' +
      'Juego:  Pokemon Unite\n' +
      'Idioma: ' + currentLang.toUpperCase() + '\n' +
      'Tema:   ' + html.getAttribute('data-theme'),

    ls: () => cmdsEn.ls(),
    date: () => '<span class="t-green">' + new Date().toLocaleString('es') + '</span>',
    whoami: () => 'Eres un visitante. Bienvenido. 👋',
    sudo: () => '<span class="t-red">Buen intento.</span> 🔒',
    rm: () => '<span class="t-red">Absolutamente no.</span>',
    secret: () =>
      '<span class="t-yellow">🎮 Prueba el codigo Konami en esta pagina...</span>\n' +
      '<span class="t-dim">↑ ↑ ↓ ↓ ← → ← → B A</span>',
    hello: () => '<span class="t-green">Hola! 👋</span>\nBienvenido a amal.dev',
    cat: () => '<span class="t-dim">🐱 miau</span>',
    exit: () => '<span class="t-dim">No hay escape. Estas aqui para siempre.</span> 😄',
    matrix: () => cmdsEn.matrix(),
    pikachu: () => cmdsEn.pikachu(),
  };
  cmdsEs.hi = cmdsEs.hello;
  cmdsEs.hola = cmdsEs.hello;
  cmdsEs.gaming = cmdsEs.pokemon;
  cmdsEs.ayuda = cmdsEs.help;

  function getCommands() {
    return currentLang === 'es' ? cmdsEs : cmdsEn;
  }

  function addLine(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    output.appendChild(p);
    body.scrollTop = body.scrollHeight;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.value.trim().toLowerCase();
    input.value = '';
    if (!cmd) return;

    addLine('<span class="t-dim">~$</span> ' + cmd.replace(/</g, '&lt;'));

    if (cmd === 'clear') {
      output.innerHTML = '';
      return;
    }

    const commands = getCommands();
    const handler = commands[cmd.split(' ')[0]];
    if (handler) {
      addLine(handler());
    } else {
      const msg = currentLang === 'es'
        ? '<span class="t-red">comando no encontrado:</span> ' + cmd.replace(/</g, '&lt;') + '\n<span class="t-dim">Escribe \'help\' para ver los comandos.</span>'
        : '<span class="t-red">command not found:</span> ' + cmd.replace(/</g, '&lt;') + '\n<span class="t-dim">Type \'help\' for available commands.</span>';
      addLine(msg);
    }
  });

  document.querySelector('.terminal').addEventListener('click', () => {
    input.focus();
  });
})();

// ── Firebase REST helpers ─────────────────────────────
const FIREBASE_DB = 'https://amal-yadav-default-rtdb.firebaseio.com';

function fbGet(path) {
  return fetch(FIREBASE_DB + '/' + path + '.json').then(r => r.json());
}

function fbSet(path, data) {
  return fetch(FIREBASE_DB + '/' + path + '.json', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(r => r.json());
}

function fbPush(path, data) {
  return fetch(FIREBASE_DB + '/' + path + '.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(r => r.json());
}

// ── Reaction Buttons (Firebase REST + localStorage toggle) ──
(function () {
  const buttons = document.querySelectorAll('.reaction-btn');

  fbGet('reactions').then(data => {
    buttons.forEach(btn => {
      const project = btn.getAttribute('data-project');
      const countEl = btn.querySelector('.reaction-count');
      const count = (data && data[project]) || 0;
      countEl.textContent = count;
    });
  }).catch(() => {});

  buttons.forEach(btn => {
    const project = btn.getAttribute('data-project');
    const localKey = 'reaction_' + project;
    const countEl = btn.querySelector('.reaction-count');

    if (localStorage.getItem(localKey) === '1') {
      btn.classList.add('liked');
    }

    btn.addEventListener('click', () => {
      const isLiked = btn.classList.contains('liked');

      if (isLiked) {
        btn.classList.remove('liked');
        localStorage.removeItem(localKey);
        fbGet('reactions/' + project).then(count => {
          return fbSet('reactions/' + project, Math.max((count || 0) - 1, 0));
        }).then(newCount => {
          countEl.textContent = newCount;
        });
      } else {
        btn.classList.add('liked', 'pop');
        localStorage.setItem(localKey, '1');
        fbGet('reactions/' + project).then(count => {
          return fbSet('reactions/' + project, (count || 0) + 1);
        }).then(newCount => {
          countEl.textContent = newCount;
        });
        setTimeout(() => btn.classList.remove('pop'), 300);
      }
    });
  });
})();

// ── Konami Code Easter Egg ────────────────────────────
(function () {
  const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let index = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === sequence[index] || e.key.toLowerCase() === sequence[index]) {
      index++;
      if (index === sequence.length) {
        index = 0;
        launchConfetti();
      }
    } else {
      index = 0;
    }
  });

  function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#c4836a', '#6b8f71', '#c4a24a', '#b8956a', '#c46a5a', '#8aaa7a'];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rv: (Math.random() - 0.5) * 10,
      });
    }

    let frame = 0;
    const maxFrames = 180;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - frame / maxFrames);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rotation += p.rv;
      });

      frame++;
      if (frame < maxFrames) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    animate();
  }
})();

// ── Firebase Guestbook (REST API, no sign-in) ────────
(function () {
  const nameInput = document.getElementById('guestName');
  const emailInput = document.getElementById('guestEmail');
  const msgInput = document.getElementById('guestMessage');
  const submitBtn = document.getElementById('guestSubmit');
  if (!submitBtn) return;

  function getSubmitText(key) {
    const texts = {
      default: { en: 'Sign the Guestbook', es: 'Firmar el Libro' },
      sending: { en: 'Sending...', es: 'Enviando...' },
      sent: { en: 'Sent!', es: 'Enviado!' },
      wait: { en: 'Wait a moment...', es: 'Espera un momento...' },
      error: { en: 'Error — try again', es: 'Error — intenta de nuevo' },
    };
    return texts[key][currentLang] || texts[key].en;
  }

  submitBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const text = msgInput.value.trim();
    if (!name || !text) return;

    const lastPost = parseInt(localStorage.getItem('guestbook_last_post') || '0', 10);
    if (Date.now() - lastPost < 10000) {
      submitBtn.textContent = getSubmitText('wait');
      setTimeout(() => { submitBtn.textContent = getSubmitText('default'); }, 2000);
      return;
    }

    submitBtn.textContent = getSubmitText('sending');
    submitBtn.style.opacity = '0.6';

    const email = emailInput.value.trim();
    if (!email) return;

    const entry = {
      name: name.slice(0, 40),
      email: email.slice(0, 100),
      text: text.slice(0, 280),
      date: new Date().toISOString().split('T')[0],
      timestamp: Date.now(),
    };

    fbPush('guestbook', entry).then((res) => {
      if (res && res.name) {
        localStorage.setItem('guestbook_last_post', String(Date.now()));
        nameInput.value = '';
        emailInput.value = '';
        msgInput.value = '';
        submitBtn.textContent = getSubmitText('sent');
        submitBtn.style.opacity = '1';
        setTimeout(() => { submitBtn.textContent = getSubmitText('default'); }, 2000);
      } else {
        throw new Error('No key returned');
      }
    }).catch((err) => {
      console.error('Guestbook error:', err);
      submitBtn.textContent = getSubmitText('error');
      submitBtn.style.opacity = '1';
      setTimeout(() => { submitBtn.textContent = getSubmitText('default'); }, 2000);
    });
  });

  nameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); emailInput.focus(); }
  });
  emailInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); msgInput.focus(); }
  });
})();
