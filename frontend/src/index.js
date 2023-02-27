import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App'
import { GiftsContextProvider } from './context/GiftContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GiftsContextProvider>
        <App />
      </GiftsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);