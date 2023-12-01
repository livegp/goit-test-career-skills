import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';

const { VITE_BASE_URL } = import.meta.env;

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <BrowserRouter basename={VITE_BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
