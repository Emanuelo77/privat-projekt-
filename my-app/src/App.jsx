import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Carousel from './components/Carousel'; // Import the Carousel component
import Leistungen from './components/Leistungen'; // Import the Leistungen component
import Galerie from './components/Galerie'; // Import the Galerie component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />

        {/* Configuring routes */}
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <WelcomeSection />
                <Carousel /> {/* Display the carousel only on the homepage */}
              </>
            } 
          />
          <Route path="/leistungen" element={<Leistungen />} /> {/* Leistungen page */}
          <Route path="/galerie" element={<Galerie />} /> {/* Galerie page */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
