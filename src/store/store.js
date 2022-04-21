import { configureStore, applyMiddleware} from '@reduxjs/toolkit';

import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import gameSlice from './gameSlice';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = configureStore({
  reducer: {
    gameState: gameSlice
  },
  composedEnhancer
});
