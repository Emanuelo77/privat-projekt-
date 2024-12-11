import React from 'react';
import './styles/Contact.css'; // Optional für Styling

function Contact() {
  return (
    <div className="contact">
      <h1>Kontakt</h1>
      <p>
        Wir freuen uns, von Ihnen zu hören! Sie können uns über die folgenden Kanäle erreichen:
      </p>
      <ul>
        <li><strong>Telefon:</strong> +49 123 456 789</li>
        <li><strong>Email:</strong> info@pm-baumeister.de</li>
        <li><strong>Adresse:</strong> Musterstraße 1, 12345 Musterstadt, Deutschland</li>
      </ul>
      <form className="contact-form">
        <label>
          <span>Name:</span>
          <input type="text" placeholder="Ihr Name" required />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" placeholder="Ihre Email" required />
        </label>
        <label>
          <span>Nachricht:</span>
          <textarea placeholder="Ihre Nachricht" rows="5" required></textarea>
        </label>
        <button type="submit">Nachricht senden</button>
      </form>
    </div>
  );
}

export default Contact;
