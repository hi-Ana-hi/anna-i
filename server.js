const express = require('express');
const path = require('path');

const locales = {
  no: require('./locales/no'),
  en: require('./locales/en'),
};

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_URL = 'https://anna-i.no';

app.enable('strict routing'); // skiller /en fra /en/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

function renderPage(lang) {
  return (req, res) => {
    const t = locales[lang];
    const other = locales[lang === 'no' ? 'en' : 'no'];
    res.render('index', {
      t,
      other,
      locales,
      siteUrl: SITE_URL,
      year: new Date().getFullYear(),
    });
  };
}

app.get('/', renderPage('no'));
app.get('/en', (req, res) => res.redirect(301, '/en/'));
app.get('/en/', renderPage('en'));

// Render bruker denne til å sjekke at appen lever
app.get('/healthz', (req, res) => res.send('ok'));

app.listen(PORT, () => console.log(`Kjører på http://localhost:${PORT}`));
