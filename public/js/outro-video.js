// Videoen nederst på Om-siden.
// Den har «autoplay» direkte i HTML-en (mest robust på mobil og i Instagram).
// Dette skriptet legger til pause-/spill-knappen, pauser videoen når den er ute av syne,
// og respekterer «reduser bevegelse».
(function () {
  const video = document.querySelector('.outro-video');
  const button = document.querySelector('.outro-toggle');
  if (!video || !button) return;

  // Ekstra sikkerhet for strenge nettlesere: tydelig lydløs og «inline»
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pausedByUser = reduceMotion.matches; // ikke spill hvis brukeren ønsker mindre bevegelse
  if (pausedByUser) video.pause();

  function updateLabel() {
    button.textContent = video.paused ? button.dataset.labelPlay : button.dataset.labelPause;
  }

  function play() {
    const attempt = video.play();
    if (attempt && attempt.catch) {
      attempt.catch(function () {
        // Avvist (f.eks. strømsparing): vis videoens egne kontroller som plan B
        video.controls = true;
        updateLabel();
      });
    }
  }

  video.addEventListener('play', updateLabel);
  video.addEventListener('pause', updateLabel);
  video.addEventListener('playing', function () { video.controls = false; });

  button.addEventListener('click', function () {
    if (video.paused) { pausedByUser = false; play(); }
    else { pausedByUser = true; video.pause(); }
  });

  button.hidden = false;
  updateLabel();

  // Pause når videoen er ute av syne (sparer batteri), spill igjen når den kommer tilbake
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !pausedByUser) play();
        else if (!entry.isIntersecting) video.pause();
      });
    }, { threshold: 0.25 }).observe(video);
  }
})();
