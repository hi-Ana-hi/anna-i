// Tekstene på «About»-siden, på alle tre språk.
// Rediger fritt! <em>…</em> gir kursiv, <a href="…">…</a> gir lenke.

const artesana = 'https://www.artesanaflamenco.no';
const studioT = 'https://studio-texnaes.no/';

// Bildet øverst på siden (ligger i public/img/, i to størrelser)
const heroPhoto = {
  // Beskåret versjon (ansikt, hals og skuldre). Original: ~/Desktop/nettside-bilder/Artistic-anahi_Brvjo.JPG
  src: '/img/anahi-brvjo-crop-1600.jpg',
  srcset: '/img/anahi-brvjo-crop-800.jpg 800w, /img/anahi-brvjo-crop-1600.jpg 1600w',
  width: 1600,
  height: 938,
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
          'Anahí er født og oppvokst i Norge, med far fra en liten kystby som heter Kragerø og mor som kom fra Chile som politisk flyktning. Hun begynte på ballett som seksåring, men den ekte dansegleden ble formet på house- og ravescenen i Norge på slutten av 1990-tallet – en lidenskap som senere, utrolig nok, ledet til flamenco.',
          'Som 20-åring reiste hun til Chile for å finne tilbake til sine chilenske røtter, og der fant hun flamencoen. Hun har aldri følt seg helt hjemme i én kategori – verken helt norsk eller helt chilensk. Og i starten var hun heller ingen typisk flamenca: Hun kom rett fra goth- og ravescenen med kort, svart hår og piercinger, og den blomstrete flamencokjolen føltes som et kostyme som tilhørte noen andre. Akkurat den rastløsheten tok hun med seg inn i intensive studier i Sevilla, hos noen av Spanias fremste flamencolærere. Mer enn 20 år senere er flamenco hennes kunstneriske morsmål – språket hun tenker på, slik en forfatter tenker på morsmålet sitt.',
        ],
      },
      {
        heading: 'Koreografisk visjon',
        paragraphs: [
          'Anahís arbeid som koreograf bygger på én grunnleggende overbevisning: vi er alltid mer enn merkelappen, eller boksen, vi putter oss selv i. Født mellom to land, to språk og flere kunstneriske tradisjoner har hun gjennom hele sitt virke kjent på å verken være det ene eller det andre – og har gradvis forstått at nettopp denne blandingen, dette «verken–eller», er styrken, ikke mangelen.',
          'Denne overbevisningen former hvordan hun skaper: ulike kunstneriske språk – flamenco, samtidsdans, folkedanstradisjoner, elektronisk musikk og det filmiske blikket – får eksistere side om side i samme kropp og samme verk, uten krav om å smelte sammen til én ren stil. Hun drives av nysgjerrighet på det uventede, det mørke, det rare og det bisarre, og vender stadig tilbake til naturen som inspirasjonskilde. Med eksperimentelt kunstnerisk mot utforsker hun flamencoens grenser, uten å miste forankringen i tradisjonen.',
          'Anahí ser kunst i alt: i naturen, i mennesker, i dyr, i kreativiteten bak ethvert skapende uttrykk. For henne er koreografi en måte å utforske identitet på – ikke som noe fastlåst, men som en pågående metamorfose. Det som en gang ble fanget, formet eller underlagt en overmakt, kan bryte opp og bli til noe nytt – slik en puppe blir til vinger. Ingenting forblir som det var. Alt forvandles.',
        ],
      },
      {
        heading: 'Dans og film',
        paragraphs: [
          'Anahí er like mye filmskaper som danser. Hun har en bachelor i audiovisuell kommunikasjon fra Duoc UC i Chile, og har gjennom hele karrieren regissert og klippet dokumentarfilmer, musikk- og dansevideoer. Kameraet og scenen har aldri vært atskilt for henne – det filmiske blikket former hvordan hun tenker koreografi.',
        ],
      },
      {
        heading: 'I dag',
        paragraphs: [
          `Anahí grunnla Artesana Escuela Flamenca i Chile allerede i 2009, og er i dag medgründer av <a href="${artesana}" target="_blank" rel="noopener">Artesana Oslo Flamencoskole</a> (2023) og medeier av <a href="${studioT}" target="_blank" rel="noopener">Studio T</a> på Vulkan i Oslo. Hun har virket profesjonelt som danser, koreograf og pedagog i Chile og Norge, opptrådt på scener i begge land og koreografert forestillinger med opptil 45 dansere fordelt på flere grupper og nivåer. I 2023 var hun gjestepedagog i TV 2s «Skal vi danse».`,
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
          'Anahí was born and raised in Norway, to a father from a small coastal town called Kragerø and a mother who came from Chile as a political refugee. She started ballet at the age of six, but her true joy of dancing was shaped on the house and rave scene in Norway in the late 1990s – a passion that, unlikely as it may sound, later led to flamenco.',
          'At 20, she travelled to Chile to reconnect with her Chilean roots, and there she found flamenco. She has never felt fully at home in any single category – neither entirely Norwegian nor entirely Chilean. Nor was she, at first, a typical flamenca: she arrived straight from the goth-rave scene, short black hair and piercings, the floral flamenco dress feeling like someone else’s costume. She carried that very restlessness into intensive studies in Seville, with some of Spain’s leading flamenco teachers. More than 20 years later, flamenco is her artistic mother tongue – the language she thinks in, the way a writer thinks in their native language.',
        ],
      },
      {
        heading: 'Choreographic vision',
        paragraphs: [
          'Anahí’s work as a choreographer is built on one fundamental conviction: we are always more than the label – or the box – we put ourselves in. Born between two countries, two languages and several artistic traditions, she has felt throughout her career that she is neither one thing nor the other – and has gradually come to see that this very mix, this “neither–nor”, is the strength, not the lack.',
          'This conviction shapes how she creates: different artistic languages – flamenco, contemporary dance, folk dance traditions, electronic music and the cinematic eye – are allowed to exist side by side in the same body and the same work, without being forced to merge into one pure style. She is driven by curiosity about the unexpected, the dark, the strange and the bizarre, and returns again and again to nature as a source of inspiration. With experimental artistic courage, she explores the boundaries of flamenco without losing her anchor in tradition.',
          'Anahí sees art in everything: in nature, in people, in animals, in the impulse behind every act of creation. For her, choreography is a way of exploring identity – not as something fixed, but as an ongoing metamorphosis. What was once captured, shaped or subdued by a greater power can break open and become something new – the way a cocoon becomes wings. Nothing stays as it was. Everything transforms.',
        ],
      },
      {
        heading: 'Dance and film',
        paragraphs: [
          'Anahí is as much a filmmaker as a dancer. She holds a bachelor’s degree in audiovisual communication from Duoc UC in Chile, and throughout her career she has directed and edited documentaries, music videos and dance videos. The camera and the stage have never been separate for her – the cinematic eye shapes how she thinks about choreography.',
        ],
      },
      {
        heading: 'Today',
        paragraphs: [
          `Anahí founded Artesana Escuela Flamenca in Chile as early as 2009. Today she is co-founder of <a href="${artesana}" target="_blank" rel="noopener">Artesana Oslo Flamenco School</a> (2023) and co-owner of <a href="${studioT}" target="_blank" rel="noopener">Studio T</a> at Vulkan in Oslo. She has worked professionally as a dancer, choreographer and teacher in Chile and Norway, performed on stages in both countries and choreographed productions with up to 45 dancers across several groups and levels. In 2023 she was a guest teacher on TV 2’s “Skal vi danse”, Norway’s version of Dancing with the Stars.`,
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
          'Anahí nació y creció en Noruega, hija de un padre de un pequeño pueblo costero llamado Kragerø y de una madre que llegó desde Chile como refugiada política. Empezó con el ballet a los seis años, pero la verdadera alegría de bailar nació en la escena house y rave de Noruega a finales de los años 90, una pasión que, por increíble que parezca, más tarde la llevó al flamenco.',
          'A los 20 años viajó a Chile para reencontrarse con sus raíces chilenas, y allí encontró el flamenco. Nunca se ha sentido del todo en casa en una sola categoría: ni del todo noruega ni del todo chilena. Y al principio tampoco era una flamenca típica: llegaba directamente de la escena gótica y rave, con el pelo corto y negro y piercings, y el vestido de flores le parecía el disfraz de otra persona. Esa misma inquietud la llevó a estudiar de forma intensiva en Sevilla, con algunos de los maestros de flamenco más destacados de España. Más de 20 años después, el flamenco es su lengua materna artística: el idioma en el que piensa, como un escritor piensa en su lengua natal.',
        ],
      },
      {
        heading: 'Visión coreográfica',
        paragraphs: [
          'El trabajo coreográfico de Anahí se basa en una convicción fundamental: siempre somos más que la etiqueta —o la caja— en la que nos metemos. Nacida entre dos países, dos idiomas y varias tradiciones artísticas, ha sentido a lo largo de su trayectoria que no es ni una cosa ni la otra, y poco a poco ha comprendido que precisamente esa mezcla, ese «ni lo uno ni lo otro», es su fuerza, no su carencia.',
          'Esta convicción define su manera de crear: distintos lenguajes artísticos —el flamenco, la danza contemporánea, las tradiciones folclóricas, la música electrónica y la mirada cinematográfica— conviven en un mismo cuerpo y una misma obra, sin la exigencia de fundirse en un único estilo puro. La mueve la curiosidad por lo inesperado, lo oscuro, lo raro y lo bizarro, y vuelve una y otra vez a la naturaleza como fuente de inspiración. Con un valiente espíritu experimental, explora los límites del flamenco sin perder su arraigo en la tradición.',
          'Anahí ve arte en todo: en la naturaleza, en las personas, en los animales, en el impulso que hay detrás de cada acto creativo. Para ella, la coreografía es una forma de explorar la identidad, no como algo fijo, sino como una metamorfosis continua. Lo que alguna vez fue atrapado, moldeado o sometido por un poder superior puede abrirse y convertirse en algo nuevo, como una crisálida que se vuelve alas. Nada permanece igual. Todo se transforma.',
        ],
      },
      {
        heading: 'Danza y cine',
        paragraphs: [
          'Anahí es tan cineasta como bailaora. Tiene un Bachelor en Comunicación Audiovisual de Duoc UC, Chile, y a lo largo de su trayectoria ha dirigido y montado documentales, videos musicales y de danza. Para ella, la cámara y el escenario nunca han estado separados: la mirada cinematográfica da forma a su manera de pensar la coreografía.',
        ],
      },
      {
        heading: 'Hoy',
        paragraphs: [
          `Anahí fundó Artesana Escuela Flamenca en Chile ya en 2009. Hoy es cofundadora de <a href="${artesana}" target="_blank" rel="noopener">Artesana Oslo Flamencoskole</a> (2023) y copropietaria de <a href="${studioT}" target="_blank" rel="noopener">Studio T</a>, en Vulkan, Oslo. Ha trabajado profesionalmente como bailaora, coreógrafa y pedagoga en Chile y Noruega, ha actuado en escenarios de ambos países y ha coreografiado espectáculos con hasta 45 bailarines repartidos en varios grupos y niveles. En 2023 fue profesora invitada en «Skal vi danse» de TV 2, la versión noruega de Bailando con las estrellas.`,
        ],
      },
    ],
  },
};
