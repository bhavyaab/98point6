import { configureStore } from '@reduxjs/toolkit';
import fourDotsReducer from './app/component/fourDots/fourDotsSlice';

export const store = configureStore({
  reducer: {
    gameState: fourDotsReducer,
  },
});
