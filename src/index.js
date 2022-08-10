import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import AppMobX from './AppMobX.tsx';

import './i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <React.Suspense fallback="loading">
          <Router>
              <AppMobX />
          </Router>
      </React.Suspense>
  </React.StrictMode>
);
