import { createStore } from 'redux';
import { rootReducers } from '../reducers/combinedReducers';

export const store = createStore(rootReducers)