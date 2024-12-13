import React from 'react';
import './styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="header-section">
        <h1>Über Uns</h1>
        <p>
          Willkommen bei <strong>P&M Baumeister GmbH</strong>. Seit unserer Gründung im Jahr 2006 haben wir uns kontinuierlich
          als zuverlässiger Partner in der Bauindustrie etabliert. Unser Ziel ist es, Qualität, Innovation und Zuverlässigkeit
          in jedes Projekt zu bringen.
        </p>
      </div>
      <div className="history-section">
        <h2>Unsere Geschichte</h2>
        <p>
          Im Jahr 2013 wurden wir offiziell als GmbH anerkannt, was unser Engagement für Qualität und Professionalität in der
          Branche unterstreicht. Heute sind wir stolz darauf, ein Team von über <strong>100 Fachkräften</strong> deutschlandweit
          zu beschäftigen.
        </p>
        <p>
          Jedes Mitglied unseres Teams bringt Fachwissen und Leidenschaft ein, um sicherzustellen, dass jedes Projekt mit
          Präzision und Sorgfalt abgeschlossen wird.
        </p>
      </div>
      <div className="values-section">
        <h2>Unsere Werte</h2>
        <div className="values-list">
          <div className="value-item">
            <h3>Qualität</h3>
            <p>Wir legen höchsten Wert auf die Qualität unserer Arbeit und die Zufriedenheit unserer Kunden.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>Durch moderne Technologien und fortlaufende Weiterentwicklung setzen wir Maßstäbe in der Branche.</p>
          </div>
          <div className="value-item">
            <h3>Nachhaltigkeit</h3>
            <p>Wir achten auf umweltfreundliche Materialien und nachhaltige Baupraktiken.</p>
          </div>
        </div>
      </div>
      <div className="team-section">
        <h2>Unser Team</h2>
        <p>
          Unsere <strong>100+ Mitarbeiter</strong> bringen Fachwissen, Engagement und Erfahrung in jedes Projekt ein. Wir sind
          stolz auf die Vielfalt und Professionalität unseres Teams.
        </p>
      </div>
      <div className="footer-section">
        <p>
          Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren oder ein Projekt zu besprechen. Gemeinsam
          setzen wir Ihre Vision in die Realität um.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
