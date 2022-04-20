import { configureStore, applyMiddleware} from '@reduxjs/toolkit';

import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import fourDotSlice from '../app/component/fourDots/fourDotsSlice';
import gridSlice from '../app/component/grid/gridSlice';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = configureStore({
  reducer: {
    gameState: fourDotSlice,
    gridState: gridSlice
  },
  composedEnhancer
});
