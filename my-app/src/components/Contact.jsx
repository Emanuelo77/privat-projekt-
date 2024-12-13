import React, { useState } from 'react';
import './styles/Contact.css'; // Stilurile formularului

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Senden...');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xovqzzyz', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Nachricht erfolgreich gesendet!');
        e.target.reset(); // Resetează formularul
      } else {
        setStatus('Es gab ein Problem beim Senden der Nachricht.');
      }
    } catch (error) {
      console.error('Eroare:', error);
      setStatus('Es gab ein Problem beim Senden der Nachricht.');
    }
  };

  return (
    <div className="contact">
      <h1>Kontakt</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Schreiben Sie uns eine Nachricht</h2>
        <label>
          <span>Name:</span>
          <input type="text" name="name" placeholder="Ihr Name" required />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name="email" placeholder="Ihre Email" required />
        </label>
        <label>
          <span>Nachricht:</span>
          <textarea name="message" placeholder="Ihre Nachricht" rows="5" required></textarea>
        </label>
        <button type="submit">Nachricht senden</button>
        <p>{status}</p>
      </form>
    </div>
  );
}

export default Contact;
