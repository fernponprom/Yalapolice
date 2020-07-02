import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config/firebase'
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie'


firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.FacebookAuthProvider()


ReactDOM.render(
  <CookiesProvider>
    <Router>
      <App />
    </Router>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
