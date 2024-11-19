import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import intro_en from './data/en/intro.json';
import intro_es from './data/es/intro.json';

import './index.css';

import App from './App';


i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
            intro: intro_en,
        },
        es: {
            intro: intro_es,
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

