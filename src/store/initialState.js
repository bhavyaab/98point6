import { gridState } from './gridState';
export const initialState = {
    gameState: 'not start', //'playing' win , draw
    player: 'me', // it can be 'me'/'robot'/'player2'
    firstTurn: 'me',
    errorState: undefined, // 
    currState: [],
    robotStatus: 'idle',//
    singlePlayer: true,
    column: [3,3,3,3],
    gridState: gridState
  };

  