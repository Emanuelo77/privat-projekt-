import React, { useState } from 'react';
import './styles/Galerie.css';

function Galerie() {
  const [lightbox, setLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setLightbox(true);
  };

  const closeLightbox = () => {
    setLightbox(false);
    setCurrentImage('');
  };

  return (
    <div className="galerie-container">
      <h2>Unsere Galerie</h2>
      <h2>Hier können Sie Bilder unserer fertiggestellten Projekte sehen</h2>
      <div className="galerie-images">
        {/* Imagini cu text */}
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/Mauer.jpg')}>
          <img src="src/components/Galerie/Mauer.jpg" alt="Bild 1" />
          <p>Mauer Wand - Mauerwerk von Anfang bis Ende,</p>
            <p>einschließlich orangefarbener Fugendichtungen.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/Trockenbau wande .jpg')}>
          <img src="src/components/Galerie/Trockenbau wande .jpg" alt="Bild 2" />
          <p>Trockenbauwand-Struktur für F90-Wände,</p>
          <p> die eine Feuerbeständigkeit von bis</p>
            <p>zum 90 Minuten bieten.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/Decke.jpg')}>
          <img src="src/components/Galerie/Decke.jpg" alt="Bild 3" />
          <p>Bandrasterdecke mit </p>
          <p>Warm- und Kaltwasserheizung</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/Fenster.jpg')}>
          <img src="src/components/Galerie/Fenster.jpg" alt="Bild 4" />
          <p>F-90 Fenster für Wände montiert</p>
          <p>und F-90 Wände mit Diamantplatten montiert.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/Fassade.jpg')}>
          <img src="src/components/Galerie/Fassade.jpg" alt="Bild 5" />
          <p>Fassade komplett erstellt,</p>
          <p>inkl. Polystyrolverklebung,</p> 
          <p>Dekoration und Fensterwinkelmontage.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/Laminat.jpg')}>
          <img src="src/components/Galerie/Laminat.jpg" alt="Bild 6" />
          <p>Parkettmontage und Linoleumverlegung </p>
          <p>sowie Sanierung an anderen Wänden.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/Treppen.jpg')}>
          <img src="src/components/Galerie/Treppen.jpg" alt="Bild 7" />
          <p>Geschliffene und lackierte </p>
          <p>Treppen zusammen mit </p>
          <p>qualitativem Wandstein-Montage.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/wohnung.jpg')}>
          <img src="src/components/Galerie/wohnung.jpg" alt="Bild 8" />
         <p>Komplett renovierte Wohnung.</p>
         <p>sowie  Fenstern Montage, Türen,.</p> 
         <p>Zargen, Parkett, Anstrich und weiteren Arbeiten.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/lll.jpg')}>
          <img src="src/components/Galerie/lll.jpg" alt="Bild 9" />
          <p>Verschiedene Renovierungsarbeiten, </p>
          <p> einschließlich Fensterinstallation,</p>
          <p> Türmontage, Malerarbeiten und Bodenverlegung.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/kuche.jpg')}>
          <img src="src/components/Galerie/kuche.jpg" alt="Bild 10" />
          <p>Vollständige Küchenmontage nach</p>
          <p>der Renovierung der Wohnung,</p>
          <p>einschließlich Geräten wie Ofen und Herd.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/owa.jpg')}>
          <img src="src/components/Galerie/owa.jpg" alt="Bild 11" />
          <p>Owa-Deckenmontage mit Owa-Struktur </p>
          <p> sowie Spachtelung und Anstrich der Nebenwände.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/dach.jpg')}>
          <img src="src/components/Galerie/dach.jpg" alt="Bild 12" />
          <p>Innenausbau des Dachs mit Dämmfolie,</p>
          <p>hochwertiger Abdichtung, Velux-Fenstern bis</p> 
          <p>zum Dachbalken, Rigipsdecke, Spachtelung und Anstrich.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/dach 2.jpg')}>
          <img src="src/components/Galerie/dach 2.jpg" alt="Bild 13" />
          <p>GKB-Decke mit Dämmung,</p>
          <p> Spachtelung sowie doppelte </p>
          <p>Trockenbauunterkonstruktion.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/f90.jpg')}>
          <img src="src/components/Galerie/f90.jpg" alt="Bild 14" />
          <p>F90-Brandschutzkästen für Lüftungskanäle,</p>
          <p>und Rohrleitungen, die dem vorbeugenden</p> 
          <p>Brandschutz dienen und eine Feuerwiderstandsdauer </p>
          <p>von bis zu 90 Minuten gewährleisten.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/grosse decke.jpg')}>
          <img src="src/components/Galerie/grosse decke.jpg" alt="Bild 15" />
          <p>Löchdecke mit doppelter UK-Konstruktion,</p> 
          <p> gespachtelten Fugen und runder Lampenverstärkung.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/123.jpg')}>
          <img src="src/components/Galerie/123.jpg" alt="Bild 16" />
          <p>GKB-Decke mit einlagiger Beplankung, doppelter UK-Konstruktion,</p>
          <p>Lampen- und Revisionsausschnitten.</p> 
          <p>Wände gespachtelt und mit 3D-Tapeten versehen.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/haus.jpg')}>
          <img src="src/components/Galerie/haus.jpg" alt="Bild 17" />
          <p>Rigips-Deckenschrägen und seitliche Stützen</p> 
          <p>mit Winkelmontage,gespachtelt und gestrichen.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/luxus.jpg')}>
          <img src="src/components/Galerie/luxus.jpg" alt="Bild 18" />
          <p>Elegante Lochdecke mit seitlichen Gipsstützen und</p> 
          <p>Fugenspachtelung. Lampenausschnitte wurden</p>
          <p>präzise integriert und die gesamte Oberfläche</p> 
          <p>professionell gestrichen.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/skafen .jpg')}>
          <img src="src/components/Galerie/skafen .jpg" alt="Bild 19" />
          <p>Lochdecke in der Mitte, seitlich Gipsplatten mit</p> 
          <p>originalen Kanten und Platz für Lampen integriert.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/skafen 5.jpg')}>
          <img src="src/components/Galerie/skafen 5.jpg" alt="Bild 20" />
          <p>Rigipswand mit Nischen in Schafform, sauber</p> 
          <p> verarbeitet und ideal für Deko oder praktische Nutzung.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/skafen 2.jpg')}>
          <img src="src/components/Galerie/skafen 2.jpg" alt="Bild 21" />
          <p>Kreisförmige Rigipsdecke mit mehreren Ebenen,</p> 
          <p>präzisen Kanten und integrierten Lampenausschnitten</p> 
          <p>für ein modernes, dynamisches Design.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/fassaden.jpg')}>
          <img src="src/components/Galerie/fassaden.jpg" alt="Bild 22" />
          <p>Fassade mit Wärmedämmung montiert, inklusive Fensterwinkeln,</p> 
          <p> seitlicher Armierungsgewebe, Sockelbereich und </p>
          <p> dekorativem Putz für ein sauberes und modernes Erscheinungsbild.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/laminut.jpg')}>
          <img src="src/components/Galerie/laminut.jpg" alt="Bild 23" />
          <p>Vinyl-Laminat sauber verlegt, ergänzt durch moderne Tapete</p>
          <p>an den Wänden. Die Oberflächen wurden sorgfältig geglättet</p>
          <p>und geschliffen, um ein elegantes und harmonisches Design</p>
          <p>zu gewährleisten.</p>
        </div>
        <div className="image-container" onClick={() => openLightbox('src/components/Galerie/tappeten.jpg')}>
        <p>All diese Projekte wurden von unserer Firma realisiert, plus viele weitere wie Dachausbau, komplette Haussanierung und Gartenarbeiten. Wir stehen Ihnen gerne zur Verfügung!</p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImage} alt="Full Screen" />
        </div>
      )}
    </div>
  );
}

export default Galerie;
