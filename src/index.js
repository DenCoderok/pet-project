import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App_useState.tsx';

import './i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <React.Suspense fallback="loading">
          <Router>
              <App />
          </Router>
      </React.Suspense>
  </React.StrictMode>
);
