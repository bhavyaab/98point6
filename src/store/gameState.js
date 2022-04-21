export function updateGameState(state, currRow, player, currColumn){
    var gameCurrState = state.gameState;
    var gridState = state.gridState;
   //win row
    if(winByRow(gridState, player, currRow)) gameCurrState = 'rowWinner';
   //win column
   if(winByColumn(gridState, player, currColumn)) gameCurrState = 'columnWinner';
   //win dia
   if(winLeftDia(gridState, player)) gameCurrState = 'leftDiaWinner';
   if(winRightDia(gridState, player)) gameCurrState = 'rightDiaWinner';
   //game draw
    if(gameDraw(state.column)) gameCurrState = 'draw';
   switch(gameCurrState){
    case 'rightDiaWinner' : 
        state.gameState = 'win';
        state.winner = player;
        state.winnerIndexes = [{x : 0, y : 0}, {x : 1, y : 1}, {x : 2, y : 2}, {x : 3, y : 3}];
    return state;
    case 'leftDiaWinner' : 
        state.gameState = 'win';
        state.winner = player;
        state.winnerIndexes = [{x : 0, y : 3}, {x : 1, y : 2}, {x : 2, y : 1}, {x : 3, y : 0}];
    return state;
    case 'columnWinner' : 
        state.gameState = 'win';
        state.winner = player;
        state.winnerIndexes = [{x : 0, y : currColumn}, {x : 1, y : currColumn}, {x : 2, y : currColumn}, {x : 3, y : currColumn}];
    return state;
    case ('rowWinner'): 
        state.gameState = 'win';
        state.winner = player;
        state.winnerIndexes = [{x : currRow, y : 0}, {x : currRow, y : 1}, {x : currRow, y : 2}, {x : currRow, y : 3}];
        return state;
    case ('draw') : 
      state.gameState = 'draw';
      return state;
    default : return state;
   }
}
//invalide move 
export function ifRobotTurn(player){
    return ('player' === 'robot') 
}
//game Draw no one wins
export function gameDraw(column){
    for(var i = 0; i < column.length; i++){
        if(column[i] !== -1) return false;
    }
    return true;
}
//deside if any row is resolved by current player
export function winByRow(gridState, player, row){
    var currRow = gridState[row];

    return (player === currRow[0]['player'] 
        && player === currRow[1]['player']
        && player === currRow[2]['player']
        && player === currRow[3]['player']);
}

function winByColumn(gridState, player, column){
    return (player === gridState[0][column]['player'] 
        && player === gridState[1][column]['player']
        && player === gridState[2][column]['player']
        && player === gridState[3][column]['player']);
}

function winLeftDia(gridState, player){
    return (player === gridState[0][3]['player'] 
        && player === gridState[1][2]['player']
        && player === gridState[2][1]['player']
        && player === gridState[3][0]['player']);
}

function winRightDia(gridState, player){
    return (player === gridState[0][0]['player'] 
        && player === gridState[1][1]['player']
        && player === gridState[2][2]['player']
        && player === gridState[3][3]['player']);
}