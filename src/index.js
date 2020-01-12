import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'

const FB_KEY = process.env.REACT_APP_FB_KEY

var firebaseConfig = {
    apiKey: `${FB_KEY}`,
    authDomain: "xanthic-c659d.firebaseapp.com",
    databaseURL: "https://xanthic-c659d.firebaseio.com",
    projectId: "xanthic-c659d",
    storageBucket: "xanthic-c659d.appspot.com",
    messagingSenderId: "345606065263",
    appId: "1:345606065263:web:a0840ca5fa214c87c3119a",
    measurementId: "G-B2GHGQR6WZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(
    <Router>
        <App />
    </Router>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
