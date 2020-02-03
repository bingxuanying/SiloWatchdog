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
import StartPage from './src/component/pages/startPage';
import TrapLstPage from './src/component/pages/trapLstPage';
import TrapInfoPage from './src/component/pages/trapInfoPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <StartPage /> */}
        {/* <TrapLstPage /> */}
        <TrapInfoPage />
      </Provider>
    );
  }
}

export default App;
