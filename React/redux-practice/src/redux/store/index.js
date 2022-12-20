import { createStore } from 'redux';
import countReducer from '../reducers';

export default createStore(countReducer);