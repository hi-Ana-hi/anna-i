// Bakgrunnsvideo i hero: lastes og spilles bare når det passer for besøkende.
(function () {
  const video = document.querySelector('.hero-video');
  const button = document.querySelector('.video-toggle');
  if (!video || !button) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Henter filen først når vi faktisk skal spille (sparer data ved redusert bevegelse)
  function load() {
    if (!video.getAttribute('src')) video.src = video.dataset.src;
  }

  function play() {
    load();
    // play() kan avvises (f.eks. strømsparing på iPhone) – da blir knappen «Spill av»
    video.play().catch(function () {});
  }

  function updateLabel() {
    button.textContent = video.paused ? button.dataset.labelPlay : button.dataset.labelPause;
  }

  video.addEventListener('play', updateLabel);
  video.addEventListener('pause', updateLabel);

  button.addEventListener('click', function () {
    if (video.paused) play();
    else video.pause();
  });

  // Knappen vises bare når JavaScript kjører (uten JS ville den ikke virket)
  button.hidden = false;

  if (!reduceMotion.matches) play();
  updateLabel();

  // Hvis noen slår på «reduser bevegelse» mens siden er åpen
  reduceMotion.addEventListener('change', function (e) {
    if (e.matches) video.pause();
  });
})();
