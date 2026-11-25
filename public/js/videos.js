// Videoer: klikk på et bilde bytter det ut med YouTube-spilleren.
// «youtube-nocookie» betyr at YouTube ikke setter sporings-cookies før videoen spilles.
// Uten JavaScript åpner lenken videoen på YouTube i stedet.
(function () {
  document.querySelectorAll('.video-thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function (e) {
      e.preventDefault();
      const id = thumb.dataset.videoId;
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
      iframe.title = thumb.getAttribute('aria-label');
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.className = 'video-frame';
      thumb.replaceWith(iframe);
      iframe.focus();
    });
  });
})();
