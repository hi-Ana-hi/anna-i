// Bakgrunnsvideo i hero: lastes og spilles bare når det passer for besøkende.
// Ekstra robust for strenge nettlesere (f.eks. Instagrams innebygde nettleser).
(function () {
  const video = document.querySelector('.hero-video');
  const button = document.querySelector('.video-toggle');
  if (!video || !button) return;

  // Strenge nettlesere godtar bare autoavspilling når videoen er tydelig lydløs og «inline»,
  // satt både som egenskap i koden og som attributt – ikke bare i HTML-en
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Henter filen først når vi faktisk skal spille (sparer data ved redusert bevegelse)
  function load() {
    if (!video.getAttribute('src')) {
      video.src = video.dataset.src;
      video.load();
    }
  }

  // fromClick = true når besøkende selv trykket «Spill av»
  function play(fromClick) {
    load();
    const attempt = video.play();
    if (attempt && attempt.catch) {
      attempt.catch(function () {
        // Avvist (f.eks. strømsparing eller Instagram): vis videoens egne kontroller som plan B
        if (fromClick) video.controls = true;
        updateLabel();
      });
    }
  }

  function updateLabel() {
    button.textContent = video.paused ? button.dataset.labelPlay : button.dataset.labelPause;
  }

  video.addEventListener('play', updateLabel);
  video.addEventListener('pause', updateLabel);
  video.addEventListener('playing', function () { video.controls = false; });

  button.addEventListener('click', function () {
    if (video.paused) play(true);
    else video.pause();
  });

  // Knappen vises bare når JavaScript kjører (uten JS ville den ikke virket)
  button.hidden = false;

  if (!reduceMotion.matches) play(false);
  updateLabel();

  // Hvis noen slår på «reduser bevegelse» mens siden er åpen (eldre nettlesere støtter ikke dette)
  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener('change', function (e) {
      if (e.matches) video.pause();
    });
  }
})();
