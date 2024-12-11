import { Link } from 'react-router-dom'; // Importă Link din react-router-dom
import './styles/navBar.css';

function NavBar() {
  return (
    <nav className="fixed-nav">
      <ul>
        <li><Link to="/">Startseite</Link></li> {/* Link pentru homepage */}
        <li><Link to="/leistungen">Leistungen</Link></li> {/* Link pentru pagina Leistungen */}
        <li><Link to="/ueber-uns">Über uns</Link></li> {/* Link pentru pagina Über uns */}
        <li><Link to="/kontakt">Kontakt</Link></li> {/* Link pentru pagina Kontakt */}
      </ul>
    </nav>
  );
}

export default NavBar;
