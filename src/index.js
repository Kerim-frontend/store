import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import firebase from 'firebase/app'
import { Provider } from 'react-redux';
import store from './redux/store.js';

firebase.initializeApp({
  apiKey: "AIzaSyDeG1LuUUWy72fdLlVaS--sUh6BqOsOGXs",
  authDomain: "store-9e14f.firebaseapp.com",
  databaseURL: "https://store-9e14f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "store-9e14f",
  storageBucket: "store-9e14f.appspot.com",
  messagingSenderId: "557386366679",
  appId: "1:557386366679:web:d5aa3c4918a03579b07a92"
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
       <App />
       </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
