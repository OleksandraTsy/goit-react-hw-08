import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App/App';
import "modern-normalize";
import './index.css';
import { persistor, store } from './redux/store';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
        <App /> 
        </BrowserRouter>
      </PersistGate>
  </Provider>
  </React.StrictMode>
);