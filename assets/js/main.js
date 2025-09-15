/* Activate Bootstrap ScrollSpy */
window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#mainNav');
  if (nav) {
    new bootstrap.ScrollSpy(document.body, { target: '#mainNav', offset: 80 });
  }

  /* Collapse mobile menu after click */
  const navLinks = document.querySelectorAll('#navbarSupportedContent .nav-link');
  const bsCollapse = document.querySelector('#navbarSupportedContent');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (bsCollapse && getComputedStyle(bsCollapse).display !== 'none') {
        const collapse = bootstrap.Collapse.getOrCreateInstance(bsCollapse);
        collapse.hide();
      }
    });
  });

  /* Year in footer */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});


