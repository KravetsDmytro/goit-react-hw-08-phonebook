import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider  } from 'react-redux';
import { App } from 'components/App';
import {store, persistor } from './redux/store' ;
import { PersistGate } from 'redux-persist/integration/react'


import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
<BrowserRouter basename='goit-react-hw-08-phonebook'>
 <App />
</BrowserRouter>
</PersistGate>

    </Provider>
  </React.StrictMode>
);
