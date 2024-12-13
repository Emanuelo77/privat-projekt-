// Importă fișierul CSS pentru Carousel
import './styles/Carousel.css'; 

const Carousel = () => {
  // Drumuri absolute către imaginile din directorul public
  const images = [
    '/images/Trockenbau .jpg',       // Fără spații în numele fișierelor
    '/images/trockenbau 2.png',
    '/images/trockenbau 3.png',
    '/images/trockenbau 4.png',
  ];

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
