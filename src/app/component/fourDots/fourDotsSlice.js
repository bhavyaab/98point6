import { createAsyncThunk, createSlice, findNonSerializableValue } from '@reduxjs/toolkit';
import robotTurn from './fourDotsAPI';

import {Navigate} from "react-router-dom";

const initialState = {
    gameState: 'not start', //'playing' win , draw
    player: 'me', // it can be 'me'/'robot'
    firstTurn: 'me',
    errorState: undefined, // 
    currState: []
  };

//get robot turn from api
  export const robotTurnAsync = createAsyncThunk(
    'currentTurn/robot',
    async () => {
        //TODO
      const response = await robotTurn();
      return response.data;
    }
  );

  export const fourDotSlice = createSlice({
    name: 'gameState',
    initialState,

    reducers: {
        //choose turn for player between player and robot
        firstTurn: (state, action) => {
            state.firstTurn = action.payload;
            state.player = action.payload;
            state.gameState = 'playing'
        }
    }
  })

export const selectPlayer = (state) => state.gameState.player;
  
export const { firstTurn } = fourDotSlice.actions;

export default fourDotSlice.reducer;