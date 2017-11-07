import React from 'react';
import { StyleSheet, Text, View, AlertIOS, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Camera from 'react-native-camera';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { setBarcode } from './reducer.js';

class Scanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCamera: true,
      cameraType: Camera.constants.Type.back
    };
  }

  gotBarcode(barcode) {
    this.props.actions.setBarcode(barcode);
  }

  renderCamera() {
    if (this.state.showCamera) {
      return (
        <Camera
        ref="cam"
        style={styles.container}
        onBarCodeRead={(e) => this.onBarCodeRead(e)}
        type={this.state.cameraType}>
        </Camera>
      )
    } else {
      return (
        <View style={styles.container}></View>
      )
    }
  }

  onBarCodeRead(e) {
    this.gotBarcode(e.data);
    this.setState({
      showCamera: false
    });
    if (this.props.borrowMode) {
      Alert.alert(
        "Thank you " + this.props.employee ,
        "For borrowing" + "\nDevice number: " + e.data,
        [
          { text: 'Done', onPress: () => this.finishBorrowPath() },
        ],
      );
    } else {
      Alert.alert(
        "Thank you",
        "For returning " + "\nDevice number: " + e.data,
        [
          { text: 'Done', onPress: () => this.finishReturnPath() },
        ],
      );
    }
  }

  finishBorrowPath() {
    this.props.navigation.dispatch({ type: 'backToHome' });
    this.props.navigation.goBack()
  }

  finishReturnPath() {
    this.props.navigation.dispatch({ type: 'goToHome' });
  }

  render() {
    return (
      this.renderCamera()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapStateToProps = state => ({
  employee: state.searchReducer.employee,
  returnMode: state.homeReducer.returnMode,
  borrowMode: state.homeReducer.borrowMode,
  barcode: state.scannerReducer.barcode
});

const mapDispatchToProps = dispatch => ({
  actions : bindActionCreators({
    setBarcode
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
