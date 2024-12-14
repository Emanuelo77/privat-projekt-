import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './styles/Leistungen.css';

function Leistungen() {
  return (
    <div id="leistungen">
      <h2>Unsere Personal Leistungen</h2>
      <p>Mit einer Personalstärke von mittlerweile 100 Fachkräften bieten wir Ihnen ein breites Spektrum an professionellen Dienstleistungen in verschiedenen Bereichen. Unsere Teams zeichnen sich durch hohe Expertise und Erfahrung aus, um Ihnen maßgeschneiderte Lösungen für Ihre Bau- und Renovierungsprojekte zu bieten.</p>

      <h2>Das sind unsere Leistungen</h2>
      <ul>
        <li>Trennwandsysteme</li>
        <li>Deckensysteme</li>
        <li>Brandschutz</li>
        <li>Akustikmaßnahmen</li>
      </ul>

      <h2>Teppichmodelle und Bodenbelagsysteme</h2>
      <ul>
        <li>Vinylteppiche</li>
        <li>Laminat</li>
        <li>Moderne Bodenbelagsysteme</li>
        <li>Mehrere Bodenlegersysteme</li>
      </ul>

      <h2>Fliesen</h2>
      <ul>
        <li>Bodenfliesen</li>
        <li>Wandfliesen</li>
        <li>Farbige und dekorative Fliesen</li>
        <li>Fugenmörtel und Klebstoffe für Fliesen</li>
      </ul>

      <h2>Fassaden- und Putzarbeiten</h2>
      <ul>
        <li>Wärmedämmverbundsysteme (WDVS)</li>
        <li>Fassadensanierungen</li>
        <li>Fassadenverkleidungen</li>
        <li>Verputzarbeiten für Innen- und Außenbereiche</li>
        <li>Fassadenanstriche und dekorative Putztechniken</li>
        <li>Verklinkerungen und Fassade-Verkabelung</li>
      </ul>

      <h2>Rohbau – Mauerarbeiten und Fundamente</h2>
      <ul>
        <li>Fundamentarbeiten – Gründung und Vorbereitung der Baufläche</li>
        <li>Rohbauarbeiten – Mauern von Wänden und tragenden Strukturen</li>
        <li>Beton- und Stahlbetonarbeiten</li>
        <li>Abdichtungsarbeiten und Drainagesysteme</li>
        <li>Stahlkonstruktionen und Betonfertigteile</li>
        <li>Ausführung von Decken- und Bodenplatten</li>
        <li>Montage von Tragkonstruktionen</li>
      </ul>

      <h2>Gebäude- und Bauendreinigung</h2>
      <ul>
        <li>Reinigung von Baustellen nach der Fertigstellung</li>
        <li>Entfernung von Bauabfällen und Staub</li>
        <li>Reinigung von Fenstern, Türen und anderen Oberflächen</li>
        <li>Restaurierung von Oberflächen und Beleuchtung</li>
        <li>Endreinigung für die Übergabe der Räume an den Eigentümer oder Mieter</li>
      </ul>

      <h2>Modernste Technik und Materialien</h2>
      <p>Alle Mitarbeiter arbeiten mit modernsten Techniken und Materialien, um qualitativ hochwertige Ergebnisse zu erzielen. Dies ermöglicht uns, auf die speziellen Bedürfnisse jedes Projekts einzugehen und höchste Qualität in allen Bereichen zu gewährleisten.</p>

      {/* Button to navigate to the Galerie page */}
      <Link to="/galerie">
        <button className="gallery-button">Galerie</button>
      </Link>
    </div>
  );
}

export default Leistungen;