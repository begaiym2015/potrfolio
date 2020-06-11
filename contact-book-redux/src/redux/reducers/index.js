import { combineReducers } from 'redux';

import AppReducer from './app-redusers';

const rootReducer = combineReducers ({ appReducer: AppReducer });

export default rootReducer;