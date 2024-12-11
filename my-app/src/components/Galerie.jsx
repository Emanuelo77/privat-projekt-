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
        <img src="src/components/Galerie/Mauer.jpg" alt="Bild 1" onClick={() => openLightbox('src/components/Galerie/Mauer.jpg')} />
        <img src="src/components/Galerie/Trockenbau wande .jpg" alt="Bild 2" onClick={() => openLightbox('src/components/Galerie/Trockenbau wande .jpg')} />
        <img src="src/components/Galerie/Decke.jpg" alt="Bild 3" onClick={() => openLightbox('src/components/Galerie/Decke.jpg')} />
        <img src="src/components/Galerie/Fenster.jpg" alt="Bild 4" onClick={() => openLightbox('src/components/Galerie/Fenster.jpg')} />
        <img src="src/components/Galerie/Fassade.jpg" alt="Bild 5" onClick={() => openLightbox('src/components/Galerie/Fassade.jpg')} />
        <img src="src/components/Galerie/Laminat.jpg" alt="Bild 6" onClick={() => openLightbox('src/components/Galerie/Laminat.jpg')} />
        <img src="src/components/Galerie/Treppen.jpg" alt="Bild 7" onClick={() => openLightbox('src/components/Galerie/Treppen.jpg')} />
        <img src="src/components/Galerie/wohnung.jpg" alt="Bild 8" onClick={() => openLightbox('src/components/Galerie/wohnung.jpg')} />
        <img src="src/components/Galerie/lll.jpg" alt="Bild 8" onClick={() => openLightbox('src/components/Galerie/lll.jpg')} />
        <img src="src/components/Galerie/kuche.jpg" alt="Bild 9" onClick={() => openLightbox('src/components/Galerie/kuche.jpg')} />
        <img src="src/components/Galerie/owa.jpg" alt="Bild 10" onClick={() => openLightbox('src/components/Galerie/owa.jpg')} />
        <img src="src/components/Galerie/dach.jpg" alt="Bild 12" onClick={() => openLightbox('src/components/Galerie/dach.jpg')} />
        <img src="src/components/Galerie/dach 2.jpg" alt="Bild 13" onClick={() => openLightbox('src/components/Galerie/dach 2.jpg')} />
        <img src="src/components/Galerie/f90.jpg" alt="Bild 14" onClick={() => openLightbox('src/components/Galerie/f90.jpg')} />
        <img src="src/components/Galerie/grosse decke.jpg" alt="Bild 16" onClick={() => openLightbox('src/components/Galerie/f90.jpg')} />
        <img src="src/components/Galerie/123.jpg" alt="Bild 15" onClick={() => openLightbox('src/components/Galerie/grosse decke .jpg')} />
        <img src="src/components/Galerie/haus.jpg" alt="Bild 17" onClick={() => openLightbox('src/components/Galerie/haus .jpg')} />
        <img src="src/components/Galerie/luxus.jpg" alt="Bild 18" onClick={() => openLightbox('src/components/Galerie/luxus .jpg')} />
        <img src="src/components/Galerie/skafen .jpg" alt="Bild 19" onClick={() => openLightbox('src/components/Galerie/skafen .jpg')} />
        <img src="src/components/Galerie/skafen 5.jpg" alt="Bild 21" onClick={() => openLightbox('src/components/Galerie/skafen 5.jpg')} />
        <img src="src/components/Galerie/skafen 2.jpg" alt="Bild 20" onClick={() => openLightbox('src/components/Galerie/skafen 2.jpg')} />
       <img src="src/components/Galerie/fassaden.jpg" alt="Bild 22" onClick={() => openLightbox('src/components/Galerie/fassaden.jpg')} />
       <img src="src/components/Galerie/laminut.jpg" alt="Bild 23" onClick={() => openLightbox('src/components/Galerie/laminut.jpg')} />
       <img src="src/components/Galerie/tappeten.jpg" alt="Bild 25" onClick={() => openLightbox('src/components/Galerie/tappeten.jpg')} />
       <img src="src/components/Galerie/tpt.jpg" alt="Bild 24" onClick={() => openLightbox('src/components/Galerie/tpt.jpg')} />
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
