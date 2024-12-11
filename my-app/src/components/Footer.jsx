import './styles/Footer.css'
function Footer() {
    return (
      <footer>
        <div className="footer-content">
          <div className="contact-info">
            <h3>P&M Baumeister GmbH</h3>
            <p>Am Klingenrain 17, 63075 Offenbach Am Main</p>
            <p>Telefon: +491630418449</p>
            <p>Email: <a href="mailto:trockenbau.offenbach@yahoo.de">trockenbau.offenbach@yahoo.de</a></p>
          </div>
          <div className="working-hours">
            <h3>Unsere Bürozeiten</h3>
            <p>Montag – Donnerstag: 7:00 Uhr – 18:00 Uhr</p>
            <p>Freitag: 7:00 Uhr – 15:00 Uhr</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 P&M Baumeister GmbH. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  