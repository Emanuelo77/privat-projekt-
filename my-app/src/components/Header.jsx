import './styles/header.css';

function Header() {
  return (
    <header id="header">
      <div className="header-content">
        <div id="logo-container">
          <img src="src/components/images/berbek.png" alt="Logo" className="logo-image" />
        </div>
        <div id="company-text">
          <h1>P&M Baumeister GmbH</h1>
          <p>Seit 2006 Ihr zuverlässiger Partner.</p>
          <p>Mit hundert Fachkräften deutschlandweit stehen wir für Qualität und Erfolg.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
