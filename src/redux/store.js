import {combineReducers} from 'redux';

import {configureStore} from '@reduxjs/toolkit';

import configReducer from './reducers/configReducer';

const rootReducer = combineReducers({
  config: configReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
