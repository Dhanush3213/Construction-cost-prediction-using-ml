import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from "./context/AppContext";
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("19ecaa669aa073f170e0e0767c8fb5b54")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>

  </React.StrictMode>
);

reportWebVitals();
