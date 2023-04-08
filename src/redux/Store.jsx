import  { createStore , applyMiddleware} from 'redux';
import Reducer from './Reducer';
import {logger} from "redux-logger"

let store = createStore(Reducer,applyMiddleware());

export default store