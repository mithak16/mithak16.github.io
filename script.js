(() => {
  'use strict';
  const channels = ['home', 'experience', 'projects', 'media'];
  const buttons = [...document.querySelectorAll('[data-channel]')];
  const content = document.querySelector('#channel-content');
  const screen = document.querySelector('.screen');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 'home';
  let animation;

  function showChannel(id, animate = true) {
    if (id === 'research') id = 'projects';
    if (!channels.includes(id)) id = 'home';
    const changed = current !== id;
    current = id;
    for (const channel of channels) document.getElementById(channel).hidden = channel !== id;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.channel === id)));
    const index = channels.indexOf(id);
    const title = id === 'media' ? 'In Media' : id === 'projects' ? 'Projects + Research' : id[0].toUpperCase() + id.slice(1);
    const homeOnly = id === 'home';
    document.querySelector('.skating-lane').hidden = !homeOnly;
    document.getElementById('home-contact').hidden = !homeOnly;
    document.getElementById('motion-toggle').hidden = !homeOnly;
    document.getElementById('channel-label').textContent = `CH ${String(index + 1).padStart(2, '0')} / ${title.toUpperCase()}`;
    document.title = `${title} · Lakshmi's portfolio`;
    document.documentElement.style.setProperty('--dial-turn', `${index * 35 - 35}deg`);
    content.scrollTop = 0;
    if (animation) animation.cancel();
    if (changed && animate && !reduceMotion.matches && typeof screen.animate === 'function') {
      animation = screen.animate([{opacity: .6}, {opacity: 1}], {duration: 180, easing: 'ease-out'});
    }
  }

  function navigate(id) {
    if (location.hash.slice(1) !== id) history.pushState(null, '', `#${id}`);
    showChannel(id);
  }
  function step(amount) {
    navigate(channels[(channels.indexOf(current) + amount + channels.length) % channels.length]);
  }
  buttons.forEach(button => button.addEventListener('click', () => navigate(button.dataset.channel)));
  document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => step(Number(button.dataset.step))));
  document.querySelector('.channels').addEventListener('keydown', event => {
    const active = buttons.indexOf(document.activeElement);
    if (active < 0) return;
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (active + 1) % buttons.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (active - 1 + buttons.length) % buttons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = buttons.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    buttons[next].focus();
    navigate(channels[next]);
  });
  window.addEventListener('hashchange', () => {
    // The skip link targets the screen, not a portfolio channel.
    if (location.hash === '#screen') return;
    showChannel(location.hash.slice(1));
  });
  window.addEventListener('popstate', () => showChannel(location.hash.slice(1)));
  showChannel(location.hash.slice(1), false);

  const links = window.PORTFOLIO_LINKS || {};
  document.querySelectorAll('[data-link]').forEach(anchor => {
    const key = anchor.dataset.link;
    const value = typeof links[key] === 'string' ? links[key].trim() : '';
    if (!value) return;
    let href = value;
    if (key === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return;
      href = `mailto:${value}`;
    } else {
      try {
        const parsed = new URL(value, location.href);
        if (!['https:', 'http:'].includes(parsed.protocol) && !(key === 'resume' && parsed.protocol === 'file:')) return;
        if (key !== 'resume' && !/^https?:\/\//i.test(value)) return;
      } catch { return; }
    }
    anchor.href = href;
    anchor.hidden = false;
    if (key !== 'email') {anchor.target = '_blank'; anchor.rel = 'noopener noreferrer';}
  });
})();

// Keep the decorative loop easy to pause without interrupting navigation.
(() => {
  const toggle = document.getElementById('motion-toggle');
  const skater = document.querySelector('.skating-snoopy');
  if (!toggle || !skater) return;
  toggle.addEventListener('click', () => {
    const paused = toggle.getAttribute('aria-pressed') !== 'true';
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', `${paused ? 'Resume' : 'Pause'} Snoopy skating animation`);
    toggle.textContent = paused ? 'Resume skating' : 'Pause skating';
    skater.style.animationPlayState = paused ? 'paused' : 'running';
  });
})();
