(() => {
  'use strict';
  const content = window.ANANKE_CONTENT;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const safeURL = (value) => { try { const url = new URL(value, location.href); return ['https:', 'http:', 'file:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
  const element = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };
  const whatsappURL = (message) => `https://wa.me/${content.whatsapp}?text=${encodeURIComponent(message)}`;
  $$('[data-whatsapp]').forEach(link => { link.href = whatsappURL(link.dataset.message || 'Olá, ANANKE! Gostaria de conversar sobre uma tattoo e solicitar um orçamento.'); });
  $('#year').textContent = new Date().getFullYear();
  const menu = $('.menu-toggle');
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menu'); $('.nav').classList.remove('open'); }
  menu.addEventListener('click', () => { const isOpen = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(isOpen)); menu.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu'); $('.nav').classList.toggle('open', isOpen); });
  $$('.nav a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  const gallery = $('#gallery');
  const dialog = $('#lightbox');
  let activeWorks = content.gallery;
  let currentIndex = 0;
  function showImage(index) { currentIndex = (index + activeWorks.length) % activeWorks.length; const work = activeWorks[currentIndex]; $('#lightbox-image').src = safeURL(work.image); $('#lightbox-image').alt = work.alt; $('#lightbox-caption').textContent = `${work.title} · ${work.label}${content.galleryIsReference ? ' · Imagem de referência' : ''} · ${currentIndex + 1}/${activeWorks.length}`; }
  function openImage(index) { showImage(index); dialog.showModal(); document.body.classList.add('modal-open'); }
  function renderGallery(category = 'all') {
    activeWorks = content.gallery.filter(work => category === 'all' || work.category === category);
    gallery.replaceChildren();
    activeWorks.forEach((work, index) => { const card = element('button', 'gallery-card'); card.type = 'button'; card.setAttribute('aria-label', `Ampliar: ${work.title}`); const img = element('img'); img.src = safeURL(work.image); img.alt = work.alt; img.loading = 'lazy'; img.width = 650; img.height = 850; const overlay = element('div', 'gallery-overlay'); const title = element('div'); title.append(element('small', '', work.label.toUpperCase()), element('strong', '', work.title)); const arrow = element('span', '', '↗'); arrow.setAttribute('aria-hidden', 'true'); overlay.append(title, arrow); card.append(img, overlay); card.addEventListener('click', () => openImage(index)); gallery.append(card); });
    if (!activeWorks.length) gallery.append(element('p', '', 'Novas artes deste estilo em breve. Converse com a equipe para conhecer outros trabalhos.'));
    $('.gallery-status').textContent = `${activeWorks.length} imagens na galeria.`;
    $$('.filter').forEach(button => { const selected = button.dataset.filter === category; button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); });
  }
  renderGallery();
  if (!content.galleryIsReference) { $('#portfolio .eyebrow').textContent = '02 / PORTFÓLIO AUTORAL'; $('.gallery-footer .reference-note').textContent = 'Uma seleção de histórias que ganharam forma na ANANKE.'; }
  $$('.filter').forEach(button => button.addEventListener('click', () => renderGallery(button.dataset.filter)));
  $$('[data-style]').forEach(link => link.addEventListener('click', () => renderGallery(link.dataset.style)));
  $('.lightbox-close').addEventListener('click', () => dialog.close());
  $('.lightbox-prev').addEventListener('click', () => showImage(currentIndex - 1));
  $('.lightbox-next').addEventListener('click', () => showImage(currentIndex + 1));
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  dialog.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(currentIndex - 1); } if (event.key === 'ArrowRight') { event.preventDefault(); showImage(currentIndex + 1); } });
  const confirmedArtists = content.artists.filter(artist => !artist.isPlaceholder);
  $('#artists-grid').hidden = confirmedArtists.length === 0;
  confirmedArtists.forEach((artist, index) => { const card = element('article', 'artist-card'); const photo = element('div', 'artist-photo'); photo.append(element('span', 'artist-number', `0${index + 1}`)); if (artist.photo) { const img = element('img'); img.src = safeURL(artist.photo); img.alt = artist.name; img.loading = 'lazy'; photo.append(img); } else { photo.append(element('span', 'artist-monogram', ['a.', 'n.', 'k.'][index % 3]), element('span', 'artist-placeholder-label', 'EM BREVE')); } const info = element('div', 'artist-info'); const text = element('div'); text.append(element('h3', '', artist.name), element('p', '', artist.specialty)); info.append(text); if (artist.instagram && safeURL(artist.instagram)) { const link = element('a', '', '↗'); link.href = safeURL(artist.instagram); link.target = '_blank'; link.rel = 'noopener noreferrer'; link.setAttribute('aria-label', `Instagram de ${artist.name}`); info.append(link); } card.append(photo, info); $('#artists-grid').append(card); });
  if (confirmedArtists.length && confirmedArtists.every(artist => artist.photo)) $('.artists-footer p').textContent = 'Encontre o olhar que combina com a sua próxima história.';
  if (content.reviews.length) { $('.review-empty').hidden = true; content.reviews.forEach(review => { const card = element('blockquote', 'review-card'); card.append(element('p', '', review.text), element('cite', '', review.name)); $('#reviews-list').append(card); }); }
  $('#booking-form').addEventListener('submit', event => { event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return; const data = new FormData(form); const name = String(data.get('name')).trim(); if (!name) { $('#name').setCustomValidity('Digite seu nome para continuar.'); $('#name').reportValidity(); return; } const message = `Olá, ANANKE! Meu nome é ${name} e gostaria de solicitar um orçamento.\n\nEstilo: ${data.get('style')}\nLocal do corpo: ${String(data.get('placement')).trim() || 'Ainda vou decidir'}\nMinha ideia: ${String(data.get('idea')).trim() || 'Gostaria de conversar com um artista.'}`; window.open(whatsappURL(message), '_blank', 'noopener,noreferrer'); });
  $('#name').addEventListener('input', () => $('#name').setCustomValidity(''));
  $$('.faq-list details').forEach(detail => detail.addEventListener('toggle', () => { if (detail.open) $$('.faq-list details').filter(other => other !== detail).forEach(other => { other.open = false; }); }));
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) { const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 }); $$('.reveal').forEach(node => { node.classList.add('reveal-ready'); observer.observe(node); }); }
})();
