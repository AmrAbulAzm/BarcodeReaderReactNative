import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import Home from '../../Containers/Home';
import Scanner from '../../Containers/Scanner';
import Search from '../../Containers/Search';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerStyle: { backgroundColor: 'orange' }
      }
    },
  Scanner: {
    screen: Scanner,
    navigationOptions: {
      title: 'Scanner',
      headerStyle: { backgroundColor: 'orange' }
      }
    },
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search',
      headerStyle: { backgroundColor: 'orange' }
      }
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
