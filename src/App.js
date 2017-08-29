import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';
import LoginForm from './component/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD1qGSnE1gav065EzgFhhJn6fPq1xaXOEA',
      authDomain: 'manager-cf7e6.firebaseapp.com',
      databaseURL: 'https://manager-cf7e6.firebaseio.com',
      projectId: 'manager-cf7e6',
      storageBucket: 'manager-cf7e6.appspot.com',
      messagingSenderId: '996918636821',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
