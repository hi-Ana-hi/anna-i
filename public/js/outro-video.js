// Videoen nederst på Om-siden: lastes og spilles først når den kommer til syne,
// pauses når den er ute av syne, og respekterer «reduser bevegelse».
(function () {
  const video = document.querySelector('.outro-video');
  const button = document.querySelector('.outro-toggle');
  if (!video || !button) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pausedByUser = reduceMotion.matches; // ikke autospill hvis brukeren ønsker mindre bevegelse

  function play() {
    if (!video.getAttribute('src')) video.src = video.dataset.src;
    video.play().catch(function () {});
  }

  function updateLabel() {
    button.textContent = video.paused ? button.dataset.labelPlay : button.dataset.labelPause;
  }

  video.addEventListener('play', updateLabel);
  video.addEventListener('pause', updateLabel);

  button.addEventListener('click', function () {
    if (video.paused) { pausedByUser = false; play(); }
    else { pausedByUser = true; video.pause(); }
  });

  button.hidden = false;
  updateLabel();

  // Spill bare når videoen er synlig (sparer data og batteri)
  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !pausedByUser) play();
      else if (!entry.isIntersecting) video.pause();
    });
  }, { threshold: 0.25 }).observe(video);
})();
