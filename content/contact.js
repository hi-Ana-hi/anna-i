// Tekstene på «Kontakt»-siden, på alle tre språk.
// Rediger fritt! <a href="…">…</a> gir lenke.

const email = 'johnsenanahi@gmail.com';
const artesana = 'https://www.artesanaflamenco.no';
const studioT = 'https://studio-texnaes.no/';
// Bildet øverst (dempede farger, fra forestillingen «Tierra»)
// Svart-hvitt-versjon finnes også: anahi-tierra-800.jpg / anahi-tierra-1280.jpg
const photo = {
  src: '/img/anahi-tierra-muted-1280.jpg',
  srcset: '/img/anahi-tierra-muted-800.jpg 800w, /img/anahi-tierra-muted-1280.jpg 1280w',
  width: 1280,
  height: 853,
};
const link = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  en: {
    email,
    // Kontaktskjema
    form: {
      formHeading: 'Write to me',
      name: 'Name',
      emailLabel: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      orEmail: 'Prefer email? Write to me directly at',
      thanksTitle: 'Thank you!',
      thanks: 'I’ll get back to you as soon as possible. Remember to check your spam folder – sometimes my reply ends up there.',
      close: 'Close',
      error: 'Something went wrong. Please try again, or email me directly at',
    },
    photo: { ...photo, alt: 'Anahí dancing on stage in Tierra, one arm reaching upwards in front of a net curtain' },
    lead: 'For performances, choreography, workshops and collaborations.',
    classesHeading: 'Classes',
    classes: `Looking for flamenco or other dance classes? You’ll find them at ${link(artesana, 'Artesana Oslo Flamenco School')} and ${link(studioT, 'Studio T')}.`,
  },
  no: {
    email,
    // Kontaktskjema
    form: {
      formHeading: 'Skriv til meg',
      name: 'Navn',
      emailLabel: 'E-post',
      message: 'Melding',
      send: 'Send',
      sending: 'Sender…',
      orEmail: 'Vil du heller sende e-post? Skriv direkte til',
      thanksTitle: 'Takk!',
      thanks: 'Jeg svarer deg så fort som mulig. Husk å sjekke spam-mappen din – noen ganger havner svaret mitt der.',
      close: 'Lukk',
      error: 'Noe gikk galt. Prøv igjen, eller send e-post direkte til',
    },
    photo: { ...photo, alt: 'Anahí danser på scenen i Tierra, med én arm strakt opp foran et nett' },
    lead: 'For forestillinger, koreografi, workshops og samarbeid.',
    classesHeading: 'Kurs',
    classes: `Vil du gå på flamenco- eller andre dansekurs? Du finner dem hos ${link(artesana, 'Artesana Oslo Flamencoskole')} og ${link(studioT, 'Studio T')}.`,
  },
  es: {
    email,
    // Kontaktskjema
    form: {
      formHeading: 'Escríbeme',
      name: 'Nombre',
      emailLabel: 'Correo electrónico',
      message: 'Mensaje',
      send: 'Enviar',
      sending: 'Enviando…',
      orEmail: '¿Prefieres el correo? Escríbeme directamente a',
      thanksTitle: '¡Gracias!',
      thanks: 'Te responderé lo antes posible. Recuerda revisar tu carpeta de spam: a veces mi respuesta termina allí.',
      close: 'Cerrar',
      error: 'Algo salió mal. Inténtalo de nuevo o escríbeme directamente a',
    },
    photo: { ...photo, alt: 'Anahí bailando en el escenario en Tierra, con un brazo extendido hacia arriba frente a una red' },
    lead: 'Para espectáculos, coreografía, talleres y colaboraciones.',
    classesHeading: 'Clases',
    classes: `¿Buscas clases de flamenco u otros estilos de danza? Las encontrarás en ${link(artesana, 'Artesana Oslo Flamencoskole')} y ${link(studioT, 'Studio T')}.`,
  },
};
