import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Borrow from '../../Components/borrowButton';
import Return from '../../Components/returnButton';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { chooseReturn, chooseBorrow } from './reducer.js';


class Home extends React.Component {
  navigateToSearch() {
    this.props.actions.chooseBorrow();
    this.props.navigation.dispatch({ type: 'goToSearch' });
  }

  navigateToScanner() {
    this.props.actions.chooseReturn();
    this.props.navigation.dispatch({ type: 'goToScanner' });
  }

  render() {
    console.log("HereHome",this.props);
    return (
      <View style={styles.container}>
        <Borrow navigateTo={() => this.navigateToSearch()}/>
        <Return navigateTo={() => this.navigateToScanner()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  returnMode: state.homeReducer.returnMode,
  borrowMode: state.homeReducer.borrowMode
});

const mapDispatchToProps = dispatch => ({
  actions : bindActionCreators({
    chooseReturn,
    chooseBorrow
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
