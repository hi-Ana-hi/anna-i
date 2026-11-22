const express = require('express');
const path = require('path');

const locales = {
  en: require('./locales/en'),
  no: require('./locales/no'),
  es: require('./locales/es'),
};

// Innhold til sider som har egen tekst (flere kommer i steg 4)
const content = {
  about: require('./content/about'),
};

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_URL = 'https://anna-i.no';

app.enable('strict routing'); // skiller /en fra /en/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

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

// Render bruker denne til å sjekke at appen lever
app.get('/healthz', (req, res) => res.send('ok'));

app.listen(PORT, () => console.log(`Kjører på http://localhost:${PORT}`));
