export const initialState = {
    gameState: 'playing', //'playing' win , draw, 'invalid move'
    player: 'me', // it can be 'me'/'robot'/'player2'
    matrixState: [], //it will contain all moves for player 
    singlePlayer: true, // 
    column: [3,3,3,3], // keep tracks of each  place availabe
    winner: undefined, //get updated if game resolve to win
    winnerIndexes : [], // keep track of index of winning row column or dia
    gridState: [
    [undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined]
    ] // keep track of each player click
  };

  