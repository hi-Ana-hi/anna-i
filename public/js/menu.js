// Mobilmeny: «Meny»-knappen åpner og lukker menyen over hele skjermen.
// Uten JavaScript vises menyen bare som en vanlig liste (knappen forblir skjult).
(function () {
  const header = document.querySelector('.site-header');
  const button = document.querySelector('.menu-toggle');
  if (!header || !button) return;

  header.classList.add('has-js');
  button.hidden = false;

  function setOpen(open) {
    header.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? button.dataset.labelClose : button.dataset.labelOpen;
    document.body.style.overflow = open ? 'hidden' : ''; // ikke rull siden bak menyen
  }

  button.addEventListener('click', function () {
    setOpen(!header.classList.contains('menu-open'));
  });

  // Esc lukker menyen
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('menu-open')) {
      setOpen(false);
      button.focus();
    }
  });
})();

// Språkmenyen: lukk den når man klikker et annet sted eller trykker Esc
(function () {
  const lang = document.querySelector('.lang');
  if (!lang) return;
  document.addEventListener('click', function (e) {
    if (lang.open && !lang.contains(e.target)) lang.open = false;
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lang.open) {
      lang.open = false;
      lang.querySelector('summary').focus();
    }
  });
})();
