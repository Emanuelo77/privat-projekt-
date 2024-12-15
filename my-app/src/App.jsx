import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';
import Carousel from './components/Carousel';
import Leistungen from './components/Leistungen';
import Galerie from './components/Galerie';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact'; // Importiere die Contact-Komponente

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />

        {/* Definiere die Routen */}
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <WelcomeSection />
                <Carousel />
              </>
            } 
          />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/aboutus" element={<AboutUs />} /> {/* About Us Seite */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Seite */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;