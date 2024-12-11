import ReactDOM from 'react-dom/client';  // Achte auf das /client
import App from './App';

// Verwenden von createRoot statt ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
