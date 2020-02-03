/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import StartPage from './src/pages/startPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StartPage />
      </Provider>
    );
  }
}

export default App;
