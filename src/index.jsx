import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root')); // Modifica esta línea
root.render(<App />);