import { createStore, applyMiddleware } from "redux";

import getRootReducer from "./Reducers";
import createSagaMiddleware from 'redux-saga';
import mySaga from './Sagas';

const sagaMiddleware = createSagaMiddleware()

export default function getStore() {
    const store = createStore(
        getRootReducer(),
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(mySaga)
    return store;
}
