const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const serviceSearch = document.getElementById('serviceSearch');
const serviceInput = document.getElementById('serviceInput');
const locationInput = document.getElementById('locationInput');
const searchNote = document.getElementById('searchNote');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? 'Close' : 'Menu';
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = 'Menu';
  });
});

document.querySelectorAll('[data-service]').forEach((button) => {
  button.addEventListener('click', () => {
    serviceInput.value = button.dataset.service;
    serviceInput.focus();
    searchNote.textContent = `Ready to find ${button.dataset.service.toLowerCase()} professionals.`;
  });
});

serviceSearch?.addEventListener('submit', (event) => {
  event.preventDefault();
  const service = serviceInput.value.trim();
  const location = locationInput.value.trim();

  if (!service) {
    serviceInput.focus();
    searchNote.textContent = 'Tell us which service you need to get started.';
    return;
  }

  searchNote.textContent = location
    ? `Showing trusted ${service.toLowerCase()} professionals near ${location}.`
    : `Showing trusted ${service.toLowerCase()} professionals near you.`;
});
