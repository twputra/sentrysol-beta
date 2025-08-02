import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx'; // Diubah dari 'App' menjadi '{ App }'
import './global.css'; // Memastikan global.css dimuat

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
