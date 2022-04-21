import { gridState } from './gridState';
export const initialState = {
    gameState: 'playing', //'playing' win , draw, 'invalid move'
    player: 'me', // it can be 'me'/'robot'/'player2'
    firstTurn: 'me',
    currState: [],
    robotStatus: 'idle',//
    singlePlayer: true,
    column: [3,3,3,3],
    gridState: gridState,
    winner: undefined,
    winnerIndexes : []
  };

  