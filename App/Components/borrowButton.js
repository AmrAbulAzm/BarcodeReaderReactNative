import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Borrow extends React.Component {
  render() {
    console.log("Here",this.props);
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.navigateTo}>
        <Text>Borrow</Text>
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
