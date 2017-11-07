import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList , ListView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { employeesFetchRequested } from './saga.js';
import { chooseEmployee } from './reducer.js';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import SearchBar from 'react-native-searchbar';

class Search extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    results: []
  };
}

  componentWillMount() {
    this.fetchEmployees()
  }

  fetchEmployees() {
    this.props.actions.employeesFetchRequested();
  }

  handleResults(results) {
    this.setState({ results});
  }

  navigateToScanner(item) {
    this.props.actions.chooseEmployee(item)
    this.props.navigation.dispatch({ type: 'goToScanner' })
  }

  render() {
    const employeesList = this.props.employees.map((employee) => employee.firstname + " " + employee.lastname);
    console.log("props", this.props);
    return (
      <View style={styles.container}>
      <FlatList
          style={styles.list}
          data={this.state.results}
          renderItem={({item}) => <TouchableOpacity onPress={() => this.navigateToScanner(item)}><Text style={styles.item}>{item}</Text></TouchableOpacity>}/>
      <SearchBar
        data={employeesList}
        handleResults = {(input) => this.handleResults(input)}
        hideBack= {true}
        showOnLoad
      />
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
  list: {
    top: 70,
    paddingTop: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  item: {
    height: 50,
    width: '100%',
    borderWidth: 2,
    borderColor: 'orange',
    padding: 10,
  }
});


const mapStateToProps = state => ({
  employees: state.searchReducer.employees,
  employee: state.searchReducer.employee
});

const mapDispatchToProps = dispatch => ({
  actions : bindActionCreators({
    employeesFetchRequested,
    chooseEmployee
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
