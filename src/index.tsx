import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import './index.css';

import App from './App';

import header_en from './data/en/header.json';
import intro_en from './data/en/intro.json';
import aboutme_en from './data/en/aboutme.json';

import header_es from './data/es/header.json';
import intro_es from './data/es/intro.json';  
import aboutme_es from './data/es/aboutme.json';
i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      header : header_en,
      intro: intro_en,
      aboutme: aboutme_en
    },
    es: {
      header : header_es,
      intro: intro_es,
      aboutme: aboutme_es
    }
  }

});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

