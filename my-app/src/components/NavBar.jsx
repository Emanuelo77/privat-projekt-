import React from 'react';
import './styles/NavBar.css'; // Importiert CSS für die Navbar

function NavBar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Startseite</a></li>
        <li><a href="/leistungen">Leistungen</a></li>
        <li><a href="/aboutus">Über uns</a></li>
        <li><a href="/contact">Kontakt</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
