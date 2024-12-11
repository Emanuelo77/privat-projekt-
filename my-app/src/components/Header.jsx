import './styles/header.css';

function Header() {
  return (
    <header id="header">
      <div className="header-content">
        <div id="logo-container">
          <img src="src/components/images/berbek.png" alt="Logo" />
        </div>
        <div id="company-text">
          <p>P&M Baumeister GmbH</p>
          <p>Seit unserer Gründung im Jahr 2006 haben wir uns kontinuierlich als zuverlässiger Partner etabliert.</p>
          <p>Im Jahr 2013 wurden wir als GmbH anerkannt und haben unsere Position in der Branche weiter gestärkt.</p>
          <p>Heute sind wir stolz darauf, 100 engagierte Mitarbeiter deutschlandweit zu beschäftigen,</p>
          <p>die mit ihrer Expertise und Leidenschaft zum Erfolg unseres Unternehmens beitragen.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
