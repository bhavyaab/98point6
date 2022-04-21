import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './grid.scss';

import { getAvailableColumn, getDotState, selectPlayer, getColumn } from '../../../store/gameSlice';
import {Dots} from '../dots/dots';

//draw the game matrix and insert the discs
export function Grid(){
    var dispatch = useDispatch();
    var matrix = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]];
    
    let player = useSelector(selectPlayer);
    let column = useSelector(getColumn);
    return (
        <div className="grid">
            {matrix.map((column, index) => {
                return (
                <div className="column" 
                     key={index} 
                     onClick={() =>  dispatch(getAvailableColumn(index))}>
                    {column.map((ele, i) => { 
                          return <div className="cell"  key={index.toString() + ele}>
                              {<Dots x={index}  y={i}></Dots>}
                         </div>})}
                 </div>)
            })}
        </div>
    )
}
