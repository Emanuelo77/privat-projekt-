
import './styles/welcomeSection.css'; // CSS-Datei importieren

function WelcomeSection() {
  return (
    <section id="welcome">
      <div className="welcome-section">
        <h2>WILLKOMMEN BEI UNS!</h2>
        <p>Erkunden Sie unsere interaktive Firmenbroschüre und lernen Sie uns besser kennen.</p>
        <p>Schön, dass Sie auf unsere Seite gefunden haben. Dürfen wir uns vorstellen?</p>

        <div className="content-wrapper">
          <div className="content-left">
            <p>Die P&M Baumeister GmbH, mit Sitz in Offenbach, ist seit 2013 erfolgreich als GmbH im Bereich Innenausbau und Ausbau tätig. Zu unseren Leistungen gehören: Trockenbau, Bodenverlegungen, Fassadenarbeiten, Malerarbeiten, Montagearbeiten, Teppichverlegung, Putzarbeiten und viele weitere Bau- und Renovierungsdienstleistungen. Als modernes und zukunftsorientiertes Unternehmen in der Baubranche legen wir besonderen Wert auf die fachgerechte Ausführung anspruchsvoller Projekte. Unsere Stärke liegt in der termingerechten Umsetzung, hoher Qualität und einer erweiterten Garantie auf unsere Arbeiten.</p>
          </div>
          <div className="content-right">
            <p>Unsere Belegschaft besteht aus 43 fachlich qualifizierten Mitarbeitern im Bereich Trockenbau, die über mehr als 10 Jahre Berufserfahrung verfügen. Zu ihren Spezialgebieten zählen unter anderem Schalldämmsysteme, Brandschutzsysteme und Feuerschutzsysteme. Zusätzlich umfasst unser Team 12 Bodenleger, die auf verschiedene Teppichmodelle spezialisiert sind, darunter Vinylteppiche, Laminat und moderne Bodenbelagsysteme. Darüber hinaus sind 23 unserer Mitarbeiter auf Fassaden- und Putzarbeiten spezialisiert. Zudem besteht unser Team aus 18 Fachkräften im Bereich Transport und Umzug, die für einen reibungslosen Ablauf und sichere Durchführung von Umzügen und Transporten sorgen. Des Weiteren haben wir 8 Mitarbeiter im Bereich Rohbau, die für die Ausführung von Fundamenten, Mauerarbeiten und anderen grundlegenden Bauleistungen verantwortlich sind. Zusätzlich kümmern sich 8 Mitarbeiter um die Gebäude- und Bauendreinigung, sodass nach Abschluss der Arbeiten stets saubere und gepflegte Ergebnisse geliefert werden. Alle Mitarbeiter arbeiten mit modernsten Techniken und Materialien, um qualitativ hochwertige Ergebnisse zu erzielen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
