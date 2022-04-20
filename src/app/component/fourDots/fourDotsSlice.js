import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { robotNextTurn } from './fourDotsAPI';

import { initialState } from '../../../store/initialState';



//get robot turn from api 
  export const fetchRobotAction = createAsyncThunk(
    'gameState/robotNextTurn',
    async (currState) => {
      const response = await robotNextTurn(currState);
      console.log('response == ', response)
      return response.data;
    }
  );

  export const fourDotSlice = createSlice({
    name: 'gameState',
    initialState,

    reducers: {
       //choose if it is single player or multiple player
       playSingle: (state, action) => {
         state.singlePlayer = action.payload;
       },
        //choose turn for player between player and robot
        firstTurn: (state, action) => {
            state.firstTurn = action.payload;
            state.player = action.payload;
            state.gameState = 'playing'
        },

  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder.addCase(fetchRobotAction.pending, (state, action) => {
        state.robotStatus = 'panding';
      });
    builder.addCase(fetchRobotAction.fulfilled, (state, action) => {
        state.robotStatus = 'idle';
        console.log('state == ', state, ' action == ', action);
        return state.currState = action.payload;
      });
      builder.addCase(fetchRobotAction.rejected, (state, action) => {
        state.robotStatus = 'error';
        console.log('state == ', state, ' action == ', action);
        return state.errorState = action.payload;
      });
  },
}
  })
//get the current state 
export const selectPlayer = (state) => state.gameState.player;
export const isSinglePlayer = (state) => state.gameState.singlePlayer;
export const getCurrState = (state) => state.gameState.currState;
// export const getAvailableColumn = (state) => state.gameState.column;
  
export const { firstTurn, playSingle, updateMatrix, getAvailableColumn } = fourDotSlice.actions;

export default fourDotSlice.reducer;