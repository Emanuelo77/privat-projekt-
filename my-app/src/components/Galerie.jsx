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

  const images = [
    { src: '/Galerie/Mauer.jpg', alt: 'Bild 1', text: 'Mauer Wand - Mauerwerk von Anfang bis Ende, einschließlich orangefarbener Fugendichtungen.' },
    { src: '/Galerie/Trockenbau wande .jpg', alt: 'Bild 2', text: 'Trockenbauwand-Struktur für F90-Wände, die eine Feuerbeständigkeit von bis zu 90 Minuten bieten.' },
    { src: '/Galerie/Decke.jpg', alt: 'Bild 3', text: 'Bandrasterdecke mit Warm- und Kaltwasserheizung.' },
    { src: '/Galerie/Fenster.jpg', alt: 'Bild 4', text: 'F-90 Fenster für Wände montiert und F-90 Wände mit Diamantplatten montiert.' },
    { src: '/Galerie/Fassade.jpg', alt: 'Bild 5', text: 'Fassade komplett erstellt, inkl. Polystyrolverklebung, Dekoration und Fensterwinkelmontage.' },
    { src: '/Galerie/Laminat.jpg', alt: 'Bild 6', text: 'Parkettmontage und Linoleumverlegung sowie Sanierung an anderen Wänden.' },
    { src: '/Galerie/Treppen.jpg', alt: 'Bild 7', text: 'Geschliffene und lackierte Treppen zusammen mit qualitativem Wandstein-Montage.' },
    { src: '/Galerie/wohnung.jpg', alt: 'Bild 8', text: 'Komplett renovierte Wohnung: Fenstermontage, Türen, Zargen, Parkett und weitere Arbeiten.' },
    { src: '/Galerie/lll.jpg', alt: 'Bild 9', text: 'Verschiedene Renovierungsarbeiten, einschließlich Fensterinstallation, Türmontage und Malerarbeiten.' },
    { src: '/Galerie/kuche.jpg', alt: 'Bild 10', text: 'Vollständige Küchenmontage nach der Renovierung der Wohnung, einschließlich Geräten wie Ofen und Herd.' },
    { src: '/Galerie/owa.jpg', alt: 'Bild 11', text: 'Owa-Deckenmontage mit Owa-Struktur sowie Spachtelung und Anstrich der Nebenwände.' },
    { src: '/Galerie/dach.jpg', alt: 'Bild 12', text: 'Innenausbau des Dachs mit Dämmfolie, hochwertiger Abdichtung, Velux-Fenstern und Rigipsdecke.' },
    { src: '/Galerie/dach 2.jpg', alt: 'Bild 13', text: 'GKB-Decke mit Dämmung, Spachtelung sowie doppelte Trockenbauunterkonstruktion.' },
    { src: '/Galerie/f90.jpg', alt: 'Bild 14', text: 'F90-Brandschutzkästen für Lüftungskanäle und Rohrleitungen mit Feuerwiderstandsdauer von bis zu 90 Minuten.' },
    { src: '/Galerie/grosse decke.jpg', alt: 'Bild 15', text: 'Löchdecke mit doppelter UK-Konstruktion, gespachtelten Fugen und runder Lampenverstärkung.' },
    { src: '/Galerie/123.jpg', alt: 'Bild 16', text: 'GKB-Decke mit einlagiger Beplankung, doppelter UK-Konstruktion, Lampen- und Revisionsausschnitten.' },
    { src: '/Galerie/haus.jpg', alt: 'Bild 17', text: 'Rigips-Deckenschrägen und seitliche Stützen mit Winkelmontage, gespachtelt und gestrichen.' },
    { src: '/Galerie/luxus.jpg', alt: 'Bild 18', text: 'Elegante Lochdecke mit seitlichen Gipsstützen und Fugenspachtelung, präzise integrierte Lampenausschnitte.' },
    { src: '/Galerie/skafen .jpg', alt: 'Bild 19', text: 'Lochdecke in der Mitte, seitlich Gipsplatten mit originalen Kanten und Platz für Lampen integriert.' },
    { src: '/Galerie/skafen 5.jpg', alt: 'Bild 20', text: 'Rigipswand mit Nischen in Schafform, sauber verarbeitet und ideal für dekorative oder praktische Nutzung.' },
    { src: '/Galerie/skafen 2.jpg', alt: 'Bild 21', text: 'Kreisförmige Rigipsdecke mit mehreren Ebenen, präzisen Kanten und integrierten Lampenausschnitten.' },
    { src: '/Galerie/fassaden.jpg', alt: 'Bild 22', text: 'Fassade mit Wärmedämmung, inklusive Fensterwinkeln, Sockelbereich und dekorativem Putz.' },
    { src: '/Galerie/laminut.jpg', alt: 'Bild 23', text: 'Vinyl-Laminat sauber verlegt, ergänzt durch moderne Tapete für ein elegantes Design.' },
   
  ];

  return (
    <div className="galerie-container">
      <h2>Unsere Galerie</h2>
      <h2>Hier können Sie Bilder unserer fertiggestellten Projekte sehen</h2>
      <div className="galerie-images">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-container"
            onClick={() => openLightbox(image.src)}
          >
            <img src={image.src} alt={image.alt} />
            <p>{image.text}</p>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImage} alt="Fullscreen" />
        </div>
      )}
    </div>
  );
}

export default Galerie;
