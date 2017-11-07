import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Return extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.navigateTo}>
        <Text>Return</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    borderWidth: 2,
    margin: 10,
    padding: 10,
  },
});
