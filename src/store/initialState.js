export const initialState = {
    gameState: 'not start', //'playing' win , draw
    player: 'me', // it can be 'me'/'robot'/'player2'
    firstTurn: 'me',
    errorState: undefined, // 
    currState: [1,3,2],
    robotStatus: 'idle',//
    singlePlayer: true,
    column: [3,3,3,3]
  };