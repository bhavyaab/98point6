import { createSlice } from '@reduxjs/toolkit';


import { initialState } from '../../../store/initialState';


export const gridSlice = createSlice({
    name: 'gridState',
    initialState,
    reducers: {
        // //if coulmn is available 
        // getAvailableColumn : (state, action) => {
        //     var availableSpace = state.column[action.payload] - 1;
        //     console.log('available space == ', availableSpace, state);
        //     if(availableSpace >= 0) {
        //         state.column[action.payload] = availableSpace; //update available column
        //         state.currState = [...state.currState, action.payload]; // update current player
        //         //update player
        //         //if single player game will be between me vs player2
        //         //if multiplayer then game will be between me vs robot
        //         if(state.player === 'me'){
        //             var nextPlayer = state.singlePlayer? 'robot':'Player 2';
        //             state.player = nextPlayer;
        //         } else {
        //             state.player = 'me'
        //         }

        //     } else {
        //         state.errorState = 'Not a valid move!';
        //     }
        //      console.log('state == ', state);
        //      return state;
        //   },
        //   // when player click on column it will put a disc into that column if valid
        // updateMatrix: (state, action) => {

        // },
    }
});


export const getColumn = (state) => state.gameState.column;

export const { updateMatrix, getAvailableColumn } = gridSlice.actions;

export default gridSlice.reducer;