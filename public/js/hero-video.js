// Bakgrunnsvideo i hero.
// Videoen har «autoplay» direkte i HTML-en (det mest robuste, også i Instagram og på mobil).
// Dette skriptet legger bare til pause-/spill-knappen og respekterer «reduser bevegelse».
(function () {
  const video = document.querySelector('.hero-video');
  const button = document.querySelector('.video-toggle');
  if (!video || !button) return;

  // Ekstra sikkerhet for strenge nettlesere: tydelig lydløs og «inline»
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  function updateLabel() {
    button.textContent = video.paused ? button.dataset.labelPlay : button.dataset.labelPause;
  }

  function play() {
    const attempt = video.play();
    if (attempt && attempt.catch) {
      attempt.catch(function () {
        // Fortsatt avvist (f.eks. strømsparing): vis videoens egne kontroller som plan B
        video.controls = true;
        updateLabel();
      });
    }
  }

  video.addEventListener('play', updateLabel);
  video.addEventListener('pause', updateLabel);
  video.addEventListener('playing', function () { video.controls = false; });

  button.addEventListener('click', function () {
    if (video.paused) play();
    else video.pause();
  });

  // Knappen vises bare når JavaScript kjører
  button.hidden = false;
  updateLabel();

  // «Reduser bevegelse» slått på: stopp videoen
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) video.pause();
  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener('change', function (e) {
      if (e.matches) video.pause();
    });
  }
})();
