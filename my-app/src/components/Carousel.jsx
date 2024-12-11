 // Import corect
import './styles/Carousel.css'; // Importă fișierul CSS

// Importă fișierele de imagini
import img1 from './images/Trockenbau .jpg';
import img2 from './images/trockenbau 2.png';
import img3 from './images/trockenbau 3.png';
import img4 from './images/trockenbau 4.png';

const Carousel = () => {
  // Folosim importurile pentru a crea lista de imagini
  const images = [img1, img2, img3, img4]; // Folosește importurile aici

  return (
    <section className="carousel-section">
      <h2>AUS UNSEREN REFERENZEN</h2>
      <div className="carousel-container">
        <div className="carousel">
          {/* Afișăm toate imaginile */}
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Imagine ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
