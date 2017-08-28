import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducer';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
