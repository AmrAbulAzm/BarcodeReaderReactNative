import { combineReducers } from "redux";
import homeReducer from '../Containers/Home/reducer';
import nav from './Navigation/reducer';
import searchReducer from '../Containers/Search/reducer';
import scannerReducer from '../Containers/Scanner/reducer';



export default function getRootReducer() {
    return combineReducers({
      nav,
      homeReducer,
      searchReducer,
      scannerReducer
    });
}
