import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'backToHome':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back({ key: 'Home' })
      );
      break;
    case 'goToHome':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'goToScanner':
    console.log("goToScannerAction");
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Scanner' }),
        state
      );
      break;
    case 'goToSearch':
    console.log("goToSearchAction");
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Search' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

export default nav;
