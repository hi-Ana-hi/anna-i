const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const locales = {
  en: require('./locales/en'),
  no: require('./locales/no'),
  es: require('./locales/es'),
};

// Innhold til sider som har egen tekst (flere kommer i steg 4)
const content = {
  about: require('./content/about'),
  contact: require('./content/contact'),
};

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_URL = 'https://anna-i.no';

app.enable('strict routing'); // skiller /en fra /en/
app.set('trust proxy', 1); // Render ligger foran appen – gir riktig IP-adresse per besøkende
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false, limit: '20kb' })); // skjema uten JavaScript
app.use(express.json({ limit: '20kb' }));                       // skjema med JavaScript

// Lager adressen til en side på et språk, f.eks. url('no', 'about') -> '/no/om'
function url(lang, page) {
  return locales[lang].path + locales[lang].pages[page].slug;
}

function renderPage(lang, page) {
  return (req, res) => {
    let view = 'page'; // enkel «under arbeid»-side
    if (page === 'home') view = 'index';
    else if (content[page]) view = page;

    res.render(view, {
      t: locales[lang],
      page,
      c: content[page] && content[page][lang],
      query: req.query,
      url,
      locales,
      siteUrl: SITE_URL,
      year: new Date().getFullYear(),
    });
  };
}

// Engelsk er standard på /, norsk på /no/, spansk på /es/.
// Hver side får en adresse på hvert språk.
for (const lang of Object.keys(locales)) {
  for (const page of Object.keys(locales[lang].pages)) {
    app.get(url(lang, page), renderPage(lang, page));
  }
}
app.get('/no', (req, res) => res.redirect(301, '/no/'));
app.get('/es', (req, res) => res.redirect(301, '/es/'));
// Gamle engelske adresser peker nå til forsiden
app.get(['/en', '/en/'], (req, res) => res.redirect(301, '/'));

// ---------- Kontaktskjema ----------
// Meldinger sendes til Anahís Gmail via Gmail selv (krever et «app-passord»).
// Sett disse på Render: GMAIL_USER og GMAIL_APP_PASSWORD.
const CONTACT_TO = 'johnsenanahi@gmail.com';
const mailer = process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    })
  : null;

// Enkel sperre: maks 5 meldinger per time fra samme adresse
const recentSends = new Map();
function tooMany(ip) {
  const hourAgo = Date.now() - 60 * 60 * 1000;
  const times = (recentSends.get(ip) || []).filter((t) => t > hourAgo);
  times.push(Date.now());
  recentSends.set(ip, times);
  return times.length > 5;
}

app.post('/api/contact', async (req, res) => {
  const wantsJson = req.is('application/json');
  const lang = locales[req.body.lang] ? req.body.lang : 'en';
  const back = (status) => url(lang, 'contact') + '?' + status + '#skjema';
  const reply = (ok, status = ok ? 200 : 400) =>
    wantsJson ? res.status(status).json({ ok }) : res.redirect(303, back(ok ? 'sendt' : 'feil'));

  const name = String(req.body.name || '').trim().slice(0, 100);
  const email = String(req.body.email || '').trim().slice(0, 200);
  const message = String(req.body.message || '').trim().slice(0, 5000);

  // «Honningkrukke»: et skjult felt bare roboter fyller ut. Late som alt gikk bra.
  if (req.body.website) return reply(true);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply(false);
  if (tooMany(req.ip)) return reply(false, 429);

  const mail = {
    from: `Nettsiden anna-i.no <${process.env.GMAIL_USER || CONTACT_TO}>`,
    to: CONTACT_TO,
    replyTo: { name, address: email }, // «Svar» i Gmail går rett til avsenderen
    subject: `Ny melding fra nettsiden: ${name.replace(/[\r\n]+/g, ' ')}`,
    text: `Navn: ${name}\nE-post: ${email}\nSpråk: ${lang}\n\n${message}`,
  };

  if (!mailer) {
    // Lokalt uten app-passord: skriv meldingen i terminalen i stedet for å sende den
    if (process.env.NODE_ENV === 'production') {
      console.error('Kontaktskjema: GMAIL_USER / GMAIL_APP_PASSWORD mangler');
      return reply(false, 500);
    }
    console.log('\n--- Kontaktskjema (ikke sendt, mangler app-passord) ---\n' + mail.text + '\n');
    return reply(true);
  }

  try {
    await mailer.sendMail(mail);
    reply(true);
  } catch (err) {
    console.error('Kontaktskjema: kunne ikke sende', err.message);
    reply(false, 500);
  }
});

// Render bruker denne til å sjekke at appen lever
app.get('/healthz', (req, res) => res.send('ok'));

app.listen(PORT, () => console.log(`Kjører på http://localhost:${PORT}`));
