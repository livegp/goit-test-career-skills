import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import { store } from './services/store';

const { VITE_BASE_URL } = import.meta.env;

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <BrowserRouter basename={VITE_BASE_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
