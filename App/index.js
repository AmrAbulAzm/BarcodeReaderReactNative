import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppWithNavigationState from './Services/Navigation';
import { Provider } from 'react-redux';
import getStore from "./Services/Store";


export default class App extends React.Component {
  store = getStore();

  render() {
    return (
      <Provider store={this.store}>
          <AppWithNavigationState />
      </Provider>
    );
  }
}
