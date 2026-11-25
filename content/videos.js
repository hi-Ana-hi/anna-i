// Videoene på «Videoer»-siden. Legg til en ny video ved å kopiere én linje i listen.
// id = koden i YouTube-lenken (det som står etter youtu.be/)
// Forhåndsbildet ligger i public/img/videos/yt-<id>.jpg

const videos = [
  { id: 'hicui-F8Of8', title: 'Soleá' },
  { id: 'r1AkE27EDw4', title: 'Falseta Tarantos' },
  { id: '-trIOa1ZvBY', title: 'Entrada Tarantos' },
  { id: 'hRckaYsQaHM', title: 'Oldie but goldie', note: { en: 'Falseta por soleá, ca. 2011', no: 'Falseta por soleá, ca. 2011', es: 'Falseta por soleá, ca. 2011' } },
];

const texts = {
  en: { lead: 'A selection of performances and studio work. More coming soon.', play: 'Play video', watchOn: 'Watch on YouTube' },
  no: { lead: 'Et utvalg forestillinger og studioarbeid. Flere kommer snart.', play: 'Spill av video', watchOn: 'Se på YouTube' },
  es: { lead: 'Una selección de actuaciones y trabajo de estudio. Pronto habrá más.', play: 'Reproducir vídeo', watchOn: 'Ver en YouTube' },
};

module.exports = Object.fromEntries(
  Object.entries(texts).map(([lang, t]) => [lang, {
    ...t,
    videos: videos.map((v) => ({ ...v, note: v.note && v.note[lang] })),
  }]),
);
