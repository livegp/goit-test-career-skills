import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-test-career-skills/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
