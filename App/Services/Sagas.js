import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {fetchEmployees} from '../Containers/Search/saga';


function* mySaga() {
  yield [
      takeEvery("EMPLOYEES_FETCH_REQUESTED", fetchEmployees),
      ];
}

export default mySaga;
