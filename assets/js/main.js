document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(data.get('subject'));
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
  document.getElementById('formNote').textContent = 'Opening your default email application…';
  window.location.href = `mailto:abdelwedoudmohamedsalem@gmail.com?subject=${subject}&body=${body}`;
});
document.querySelectorAll('#navLinks .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navLinks');
    if (menu.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

const projectSearch = document.getElementById('projectSearch');
if (projectSearch) {
  const tiles = Array.from(document.querySelectorAll('.internship-project-tile'));
  const status = document.getElementById('projectSearchStatus');
  projectSearch.addEventListener('input', () => {
    const query = projectSearch.value.trim().toLocaleLowerCase('fr');
    let visible = 0;
    tiles.forEach(tile => {
      const match = tile.textContent.toLocaleLowerCase('fr').includes(query);
      tile.hidden = !match;
      if (match) visible++;
    });
    status.textContent = `${visible} projet${visible > 1 ? 's' : ''} affiché${visible > 1 ? 's' : ''}.`;
  });
}


// Motion and interaction enhancements
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll progress bar, compact navigation and back-to-top control.
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  const topButton = document.createElement('button');
  topButton.className = 'back-to-top';
  topButton.type = 'button';
  topButton.setAttribute('aria-label', 'Retour en haut de page');
  topButton.title = 'Retour en haut';
  topButton.textContent = '↑';
  document.body.appendChild(topButton);
  topButton.addEventListener('click', () => window.scrollTo({top: 0, behavior: reduceMotion ? 'auto' : 'smooth'}));

  let ticking = false;
  const updateScrollUI = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${percent}%`;
    const nav = document.querySelector('.navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
    topButton.classList.toggle('visible', window.scrollY > 480);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollUI);
      ticking = true;
    }
  }, {passive: true});
  updateScrollUI();

  // Reveal sections/cards as they enter the viewport, with a staggered sequence.
  const revealSelectors = [
    '.section-heading', '#about .lead-copy', '#about .body-copy', '#about .logo-strip',
    '.info-panel', '.skill-card', '.timeline-item', '.project-card',
    '.downloads-panel', '.internship-project-tile', '.credential-card',
    '.language-panel', '.contact-panel', '.contact-form', '.detail-card',
    '.evidence-card', '.notice'
  ];
  const revealTargets = document.querySelectorAll(revealSelectors.join(','));
  revealTargets.forEach((el, index) => {
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${(index % 4) * 75}ms`);
  });
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12, rootMargin: '0px 0px -35px 0px'});
    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  // Gentle pointer glow on desktop only.
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduceMotion) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.appendChild(glow);
    window.addEventListener('pointermove', event => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }, {passive: true});
  }

  // Small tilt interaction for the portrait on desktop, disabled on touch/reduced motion.
  const portrait = document.querySelector('.portrait-frame');
  if (portrait && window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduceMotion) {
    portrait.addEventListener('pointermove', event => {
      const rect = portrait.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      portrait.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 4}deg)`;
    });
    portrait.addEventListener('pointerleave', () => portrait.style.removeProperty('transform'));
  }
})();
