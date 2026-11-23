// Kontaktskjema: sender uten å laste siden på nytt, og viser en takk-pop-up.
// Uten JavaScript fungerer skjemaet fortsatt (siden lastes på nytt med en takk-melding).
(function () {
  const form = document.querySelector('.contact-form');
  const dialog = document.querySelector('.thanks-dialog');
  if (!form || !dialog || typeof dialog.showModal !== 'function') return;

  const button = form.querySelector('button[type="submit"]');
  const error = form.querySelector('.form-status-error');
  const sendLabel = button.textContent;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    error.hidden = true;
    button.disabled = true;
    button.textContent = button.dataset.labelSending;

    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!result.ok) throw new Error('not ok');
      form.reset();
      dialog.showModal();
    } catch (err) {
      error.hidden = false;
    } finally {
      button.disabled = false;
      button.textContent = sendLabel;
    }
  });

  dialog.querySelector('.thanks-close').addEventListener('click', function () {
    dialog.close();
  });

  // Klikk utenfor boksen lukker også pop-upen
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });
})();
