import React from 'react';
import ReactDOM from 'react-dom/client';  // Folosim createRoot din React 18
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
