// Tekstene på «About»-siden, på alle tre språk.
// Rediger fritt! <em>…</em> gir kursiv, <a href="…">…</a> gir lenke.

const artesana = 'https://www.artesanaflamenco.no';
const studioT = 'https://studio-texnaes.no/';

// Bildet øverst på siden (ligger i public/img/, i to størrelser)
const heroPhoto = {
  src: '/img/anahi-brvjo-1600.jpg',
  srcset: '/img/anahi-brvjo-800.jpg 800w, /img/anahi-brvjo-1600.jpg 1600w',
  width: 1600,
  height: 1064,
};

module.exports = {
  no: {
    photo: { ...heroPhoto, alt: 'Svart-hvitt portrett av Anahí med hodet bøyd bakover og håret i bevegelse', credit: 'Foto: Osvaldo Labbe (Brvjo)' },
    lead:
      'Verken helt norsk eller helt chilensk – og aldri bare én stil. Anahí er danser, koreograf, visuell artist og pedagog med over 20 år i flamenco.',
    sections: [
      {
        heading: 'Røtter',
        paragraphs: [
          'Anahí er født og oppvokst i Norge, med far fra den lille kystbyen Kragerø og mor som kom fra Chile som politisk flyktning. Hun begynte på ballett som seksåring, men den ekte dansegleden ble formet på house- og ravescenen i Norge på 1990-tallet – en lidenskap som senere, utrolig nok, ledet til flamenco.',
          'Som 20-åring reiste hun til Chile for å bli kjent med sine chilenske røtter, og der fant hun flamencoen. Hun har aldri følt seg helt hjemme i én kategori – verken helt norsk eller helt chilensk, og i starten heller ikke typisk «flamenco» av natur. Akkurat den rastløsheten tok hun med seg inn i intensive studier i Sevilla, hos noen av Spanias fremste flamencolærere. Mer enn 20 år senere er flamenco hennes kunstneriske morsmål – språket hun tenker på, slik en forfatter tenker på sitt.',
        ],
      },
      {
        heading: 'Koreografisk visjon',
        paragraphs: [
          'Anahís arbeid som koreograf bygger på én grunnleggende overbevisning: vi er alltid mer enn merkelappen, eller boksen, vi putter oss selv i. Født mellom to land, to språk og flere kunstneriske tradisjoner har hun gjennom hele sitt virke kjent på å verken være det ene eller det andre – og har gradvis forstått at nettopp denne blandingen, dette «verken–eller», er styrken, ikke mangelen.',
          'Denne overbevisningen former hvordan hun skaper: ulike kunstneriske språk – flamenco, samtidsdans, folkedanstradisjoner, elektronisk musikk og det filmiske blikket – får eksistere side om side i samme kropp og samme verk, uten krav om å smelte sammen til én ren stil. Hun drives av nysgjerrighet på det uventede, det mørke, det rare og det bisarre, og vender stadig tilbake til naturen som inspirasjonskilde. Med eksperimentelt kunstnerisk mot utforsker hun flamencoens grenser, uten å miste forankringen i tradisjonen.',
          'Anahí ser kunst i alt: i naturen, i mennesker, i dyr, i kreativiteten bak ethvert skapende uttrykk. For henne er koreografi en måte å undersøke identitet på – ikke som noe fastlåst, men som noe i stadig forvandling, der det som en gang ble fanget, formet eller underlagt en overmakt, kan forvandles til noe som vokser og lever videre.',
        ],
      },
      {
        heading: 'Dans og film',
        paragraphs: [
          'Med en bachelor i audiovisuell kommunikasjon fra Duoc UC i Chile har Anahí alltid arbeidet i krysningsfeltet mellom dans og det visuelle. Hun har regissert og klippet dokumentarfilmer, musikk- og dansevideoer, og det filmiske blikket er i dag en integrert del av hvordan hun tenker koreografi – ikke et sideprosjekt.',
        ],
      },
      {
        heading: 'I dag',
        paragraphs: [
          `Anahí grunnla Artesana Escuela Flamenca i Chile allerede i 2009, og er i dag medgründer av <a href="${artesana}">Artesana Oslo Flamencoskole</a> (2023) og medeier av <a href="${studioT}">Studio T</a> på Vulkan i Oslo. Hun har virket profesjonelt som danser, koreograf og pedagog i Chile og Norge, opptrådt på scener i begge land og koreografert forestillinger med opptil 45 dansere fordelt på flere grupper og nivåer. I 2023 var hun gjestepedagog i TV 2s «Skal vi danse».`,
        ],
      },
    ],
  },

  en: {
    photo: { ...heroPhoto, alt: 'Black-and-white portrait of Anahí with her head tilted back and her hair in motion', credit: 'Photo: Osvaldo Labbe (Brvjo)' },
    lead:
      'Neither entirely Norwegian nor entirely Chilean – and never just one style. Anahí is a dancer, choreographer, visual artist and teacher with more than 20 years in flamenco.',
    sections: [
      {
        heading: 'Roots',
        paragraphs: [
          'Anahí was born and raised in Norway, to a father from the small coastal town of Kragerø and a mother who came from Chile as a political refugee. She started ballet at the age of six, but her true joy of dancing was shaped on the house and rave scene in Norway in the 1990s – a passion that, unlikely as it may sound, later led to flamenco.',
          'At 20, she travelled to Chile to get to know her Chilean roots, and there she found flamenco. She has never felt fully at home in any single category – neither entirely Norwegian nor entirely Chilean, and at first not typically “flamenco” by nature either. She carried that very restlessness into intensive studies in Seville, with some of Spain’s leading flamenco teachers. More than 20 years later, flamenco is her artistic mother tongue – the language she thinks in, the way a writer thinks in their own.',
        ],
      },
      {
        heading: 'Choreographic vision',
        paragraphs: [
          'Anahí’s work as a choreographer is built on one fundamental conviction: we are always more than the label – or the box – we put ourselves in. Born between two countries, two languages and several artistic traditions, she has felt throughout her career that she is neither one thing nor the other – and has gradually come to see that this very mix, this “neither–nor”, is the strength, not the lack.',
          'This conviction shapes how she creates: different artistic languages – flamenco, contemporary dance, folk dance traditions, electronic music and the cinematic eye – are allowed to exist side by side in the same body and the same work, without being forced to merge into one pure style. She is driven by curiosity about the unexpected, the dark, the strange and the bizarre, and returns again and again to nature as a source of inspiration. With experimental artistic courage, she explores the boundaries of flamenco without losing her anchor in tradition.',
          'Anahí sees art in everything: in nature, in people, in animals, in the impulse behind every act of creation. For her, choreography is a way of exploring identity – not as something fixed, but as something in constant transformation, where what was once captured, shaped or subjugated by a greater power can be transformed into something that grows and lives on.',
        ],
      },
      {
        heading: 'Dance and film',
        paragraphs: [
          'With a bachelor’s degree in audiovisual communication from Duoc UC in Chile, Anahí has always worked where dance and the visual meet. She has directed and edited documentaries as well as music and dance videos, and the cinematic eye is now an integral part of how she thinks about choreography – not a side project.',
        ],
      },
      {
        heading: 'Today',
        paragraphs: [
          `Anahí founded Artesana Escuela Flamenca in Chile as early as 2009. Today she is co-founder of <a href="${artesana}">Artesana Oslo Flamenco School</a> (2023) and co-owner of <a href="${studioT}">Studio T</a> at Vulkan in Oslo. She has worked professionally as a dancer, choreographer and teacher in Chile and Norway, performed on stages in both countries and choreographed productions with up to 45 dancers across several groups and levels. In 2023 she was a guest teacher on TV 2’s “Skal vi danse”, Norway’s version of Dancing with the Stars.`,
        ],
      },
    ],
  },

  es: {
    photo: { ...heroPhoto, alt: 'Retrato en blanco y negro de Anahí con la cabeza inclinada hacia atrás y el pelo en movimiento', credit: 'Foto: Osvaldo Labbe (Brvjo)' },
    lead:
      'Ni del todo noruega ni del todo chilena, y nunca de un solo estilo. Anahí es bailaora, coreógrafa, artista visual y pedagoga, con más de 20 años en el flamenco.',
    sections: [
      {
        heading: 'Raíces',
        paragraphs: [
          'Anahí nació y creció en Noruega, hija de un padre del pequeño pueblo costero de Kragerø y de una madre que llegó desde Chile como refugiada política. Empezó con el ballet a los seis años, pero la verdadera alegría de bailar nació en la escena house y rave de Noruega en los años 90, una pasión que, por increíble que parezca, más tarde la llevó al flamenco.',
          'A los 20 años viajó a Chile para conocer sus raíces chilenas, y allí encontró el flamenco. Nunca se ha sentido del todo en casa en una sola categoría: ni del todo noruega ni del todo chilena, y al principio tampoco típicamente «flamenca» por naturaleza. Esa misma inquietud la llevó a estudiar de forma intensiva en Sevilla, con algunos de los maestros de flamenco más destacados de España. Más de 20 años después, el flamenco es su lengua materna artística: el idioma en el que piensa, como un escritor piensa en el suyo.',
        ],
      },
      {
        heading: 'Visión coreográfica',
        paragraphs: [
          'El trabajo coreográfico de Anahí se basa en una convicción fundamental: siempre somos más que la etiqueta —o la caja— en la que nos metemos. Nacida entre dos países, dos idiomas y varias tradiciones artísticas, ha sentido a lo largo de su trayectoria que no es ni una cosa ni la otra, y poco a poco ha comprendido que precisamente esa mezcla, ese «ni lo uno ni lo otro», es su fuerza, no su carencia.',
          'Esta convicción define su manera de crear: distintos lenguajes artísticos —el flamenco, la danza contemporánea, las tradiciones folclóricas, la música electrónica y la mirada cinematográfica— conviven en un mismo cuerpo y una misma obra, sin la exigencia de fundirse en un único estilo puro. La mueve la curiosidad por lo inesperado, lo oscuro, lo raro y lo bizarro, y vuelve una y otra vez a la naturaleza como fuente de inspiración. Con un valiente espíritu experimental, explora los límites del flamenco sin perder su arraigo en la tradición.',
          'Anahí ve arte en todo: en la naturaleza, en las personas, en los animales, en el impulso que hay detrás de cada acto creativo. Para ella, la coreografía es una forma de investigar la identidad, no como algo fijo, sino como algo en constante transformación, donde lo que alguna vez fue atrapado, moldeado o sometido a un poder superior puede transformarse en algo que crece y sigue vivo.',
        ],
      },
      {
        heading: 'Danza y cine',
        paragraphs: [
          'Con un Bachelor en Comunicación Audiovisual de Duoc UC, Chile, Anahí siempre ha trabajado en el cruce entre la danza y lo visual. Ha dirigido y montado documentales, así como videos musicales y de danza, y la mirada cinematográfica es hoy parte integral de su forma de pensar la coreografía, no un proyecto paralelo.',
        ],
      },
      {
        heading: 'Hoy',
        paragraphs: [
          `Anahí fundó Artesana Escuela Flamenca en Chile ya en 2009. Hoy es cofundadora de <a href="${artesana}">Artesana Oslo Flamencoskole</a> (2023) y copropietaria de <a href="${studioT}">Studio T</a>, en Vulkan, Oslo. Ha trabajado profesionalmente como bailaora, coreógrafa y pedagoga en Chile y Noruega, ha actuado en escenarios de ambos países y ha coreografiado espectáculos con hasta 45 bailarines repartidos en varios grupos y niveles. En 2023 fue profesora invitada en «Skal vi danse» de TV 2, la versión noruega de Bailando con las estrellas.`,
        ],
      },
    ],
  },
};
