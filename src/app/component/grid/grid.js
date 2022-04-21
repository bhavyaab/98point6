import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './grid.scss';

import { getAvailableColumn, getWinnerIndexes, selectPlayer, fetchRobotAction, getCurrState } from '../../../store/gameSlice';
import {Dots} from '../dots/dots';

//draw the game matrix and insert the discs
export function Grid(){
    var dispatch = useDispatch();
    var matrix = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]];
    var winnerIndex = useSelector(getWinnerIndexes);
    var currentState = useSelector(getCurrState);
    var currPlayer = useSelector(selectPlayer);
    // if(currPlayer === 'robot') {
    //     return dispatch(fetchRobotAction(currentState));
    // }
    return (
        <div className="grid">
            {matrix.map((column, index) => {
                return (
                <div className="column" 
                     key={index} 
                     onClick={() =>  dispatch(getAvailableColumn(index))}>
                    {column.map((ele, i) => { 
                          return <div className={winnerIndexFound(winnerIndex, index, i)? "cell winner": "cell"} 
                                      key={index.toString() + ele}>
                              {<Dots x={index}  y={i}></Dots>}
                         </div>})}
                 </div>)
            })}
        </div>
    )
}


function winnerIndexFound(winnerIndexes, x, y){
    for(var i = 0; i < winnerIndexes.length; i++){
        if(winnerIndexes[i]['x'] === x && winnerIndexes[i]['y'] === y) return true;
    }
    return false;
}
