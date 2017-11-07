import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../Services/Util/api';
import { setEmployees } from './reducer';


export function* fetchEmployees(action) {
  console.log(action);
   try {
      const employees = yield call(api.getEmployees);
      yield put(setEmployees(employees));
   } catch (e) {
     console.log(e.message);
   }
}

/////Actions/////

export function employeesFetchRequested() {
    return {
        type : 'EMPLOYEES_FETCH_REQUESTED'
    };
};
