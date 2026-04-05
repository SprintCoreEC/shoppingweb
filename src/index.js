import React from 'react';
import { createRoot } from 'react-dom/client'; // IMPORTANTE en React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
