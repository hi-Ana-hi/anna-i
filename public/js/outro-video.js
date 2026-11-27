// Videoen nederst på Om-siden: lastes og spilles først når den kommer til syne,
// pauses når den er ute av syne, og respekterer «reduser bevegelse».
(function () {
  const video = document.querySelector('.outro-video');
  const button = document.querySelector('.outro-toggle');
  if (!video || !button) return;

  // Tydelig lydløs og «inline» – kreves av strenge nettlesere (f.eks. Instagram)
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pausedByUser = reduceMotion.matches; // ikke autospill hvis brukeren ønsker mindre bevegelse

  function play(fromClick) {
    if (!video.getAttribute('src')) {
      video.src = video.dataset.src;
      video.load();
    }
    const attempt = video.play();
    if (attempt && attempt.catch) {
      attempt.catch(function () {
        // Avvist: vis videoens egne kontroller som plan B når besøkende selv trykket
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
    if (video.paused) { pausedByUser = false; play(true); }
    else { pausedByUser = true; video.pause(); }
  });

  button.hidden = false;
  updateLabel();

  // Spill bare når videoen er synlig (sparer data og batteri)
  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !pausedByUser) play(false);
      else if (!entry.isIntersecting) video.pause();
    });
  }, { threshold: 0.25 }).observe(video);
})();
