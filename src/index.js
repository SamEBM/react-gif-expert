import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>

  // Para que no renderice dos veces los componentes en desarrollo, sólo usar:
  // <GifExpertApp />
);
