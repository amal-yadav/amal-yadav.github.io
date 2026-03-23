// ── Theme Toggle ─────────────────────────────────────
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');

const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);

toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);

});

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

  const commands = {
    help: () =>
      '<span class="t-accent">Available commands:</span>\n' +
      '  help      — show this message\n' +
      '  about     — who is Aman?\n' +
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
      '<span class="t-accent">Aman Singh</span>\n' +
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

    gaming: () => commands.pokemon(),

    now: () =>
      '<span class="t-accent">Right now:</span>\n' +
      '  Building local AI pipelines\n' +
      '  Developing AI Journal app\n' +
      '  Composing new music\n' +
      '  Grinding Pokemon Unite ranked',

    neofetch: () =>
      '<span class="t-accent">aman</span>@<span class="t-accent">dev</span>\n' +
      '────────────────\n' +
      'OS:     macOS / Linux\n' +
      'Shell:  zsh\n' +
      'Stack:  Python, Ollama, JS\n' +
      'AI:     Llama 3, Phi-3, Mistral\n' +
      'Music:  Songwriter & Composer\n' +
      'Game:   Pokemon Unite\n' +
      'Theme:  ' + html.getAttribute('data-theme'),

    ls: () =>
      'automate.py    llama3.gguf\n' +
      'journal.py     config.yaml\n' +
      'songs/         pokemon-notes/\n' +
      'README.md      .secrets 🔒',

    date: () =>
      '<span class="t-green">' + new Date().toLocaleString() + '</span>',

    whoami: () =>
      'You\'re a visitor. Welcome. 👋',

    sudo: () =>
      '<span class="t-red">Nice try.</span> 🔒',

    rm: () =>
      '<span class="t-red">Absolutely not.</span>',

    secret: () =>
      '<span class="t-yellow">🎮 Try the Konami code on this page...</span>\n' +
      '<span class="t-dim">↑ ↑ ↓ ↓ ← → ← → B A</span>',

    hello: () =>
      '<span class="t-green">Hey there! 👋</span>\n' +
      'Welcome to aman.dev',

    hi: () => commands.hello(),

    cat: () =>
      '<span class="t-dim">🐱 meow</span>',

    exit: () =>
      '<span class="t-dim">There is no escape. You\'re here forever.</span> 😄',

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

    const handler = commands[cmd.split(' ')[0]];
    if (handler) {
      addLine(handler());
    } else {
      addLine('<span class="t-red">command not found:</span> ' + cmd.replace(/</g, '&lt;') + '\n<span class="t-dim">Type \'help\' for available commands.</span>');
    }
  });

  // Focus terminal on click
  document.querySelector('.terminal').addEventListener('click', () => {
    input.focus();
  });
})();

// ── Reaction Buttons (Firebase shared + localStorage toggle) ──
(function () {
  const buttons = document.querySelectorAll('.reaction-btn');

  function initReactions() {
    if (typeof firebase === 'undefined') return;

    // Initialize Firebase early for reactions (guestbook section inits it later too, so guard)
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBhaIhN482xA8LYfGrBG425EmV_oqwcEcY",
        authDomain: "amal-yadav.firebaseapp.com",
        databaseURL: "https://amal-yadav-default-rtdb.firebaseio.com",
        projectId: "amal-yadav",
        storageBucket: "amal-yadav.firebasestorage.app",
        messagingSenderId: "368033612643",
        appId: "1:368033612643:web:4fd90954750233cb850956"
      });
    }

    const reactionsRef = firebase.database().ref('reactions');

    buttons.forEach(btn => {
      const project = btn.getAttribute('data-project');
      const localKey = 'reaction_' + project;
      const countEl = btn.querySelector('.reaction-count');

      // Listen for real-time count from Firebase
      reactionsRef.child(project).on('value', (snapshot) => {
        const count = snapshot.val() || 0;
        countEl.textContent = count;
      });

      // Restore liked state from localStorage
      if (localStorage.getItem(localKey) === '1') {
        btn.classList.add('liked');
      }

      btn.addEventListener('click', () => {
        const isLiked = btn.classList.contains('liked');

        if (isLiked) {
          btn.classList.remove('liked');
          localStorage.removeItem(localKey);
          reactionsRef.child(project).transaction(count => Math.max((count || 0) - 1, 0));
        } else {
          btn.classList.add('liked', 'pop');
          localStorage.setItem(localKey, '1');
          reactionsRef.child(project).transaction(count => (count || 0) + 1);
          setTimeout(() => btn.classList.remove('pop'), 300);
        }
      });
    });
  }

  initReactions();
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
    const colors = ['#7c6af7', '#ff5064', '#febc2e', '#28c840', '#00bfff', '#ff69b4'];

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

// ── Firebase Guestbook (shared, no sign-in) ──────────
(function () {
  const nameInput = document.getElementById('guestName');
  const msgInput = document.getElementById('guestMessage');
  const submitBtn = document.getElementById('guestSubmit');
  if (!submitBtn) return;

  if (typeof firebase === 'undefined' || !firebase.apps.length) return;
  const db = firebase.database().ref('guestbook');

  submitBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const text = msgInput.value.trim();
    if (!name || !text) return;

    // Rate limit: 1 message per 10 seconds
    const lastPost = parseInt(localStorage.getItem('guestbook_last_post') || '0', 10);
    if (Date.now() - lastPost < 10000) {
      submitBtn.textContent = 'Wait a moment...';
      setTimeout(() => { submitBtn.textContent = 'Sign the Guestbook'; }, 2000);
      return;
    }

    submitBtn.textContent = 'Sending...';
    submitBtn.style.opacity = '0.6';

    db.push({
      name: name.slice(0, 40),
      text: text.slice(0, 280),
      date: new Date().toISOString().split('T')[0],
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    }).then(() => {
      localStorage.setItem('guestbook_last_post', String(Date.now()));
      nameInput.value = '';
      msgInput.value = '';
      submitBtn.textContent = 'Sent!';
      submitBtn.style.opacity = '1';
      setTimeout(() => { submitBtn.textContent = 'Sign the Guestbook'; }, 2000);
    }).catch(() => {
      submitBtn.textContent = 'Error — try again';
      submitBtn.style.opacity = '1';
      setTimeout(() => { submitBtn.textContent = 'Sign the Guestbook'; }, 2000);
    });
  });

  nameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      msgInput.focus();
    }
  });
})();

