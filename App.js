
import React, { Component } from 'react';

import { Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';


import Router from './src/Router'

export default class App extends Component<{}> {

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyBJrW5yKaTOlDHsq8Xe9Oshd46cC2bS144",
      authDomain: "manager-f57ff.firebaseapp.com",
      databaseURL: "https://manager-f57ff.firebaseio.com",
      projectId: "manager-f57ff",
      storageBucket: "manager-f57ff.appspot.com",
      messagingSenderId: "14937794048"
    };
    firebase.initializeApp(config);

  }
  render() {
    const store = createStore(reducers,{}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store} >
       <Router />
      </Provider>

    );
  }
}
