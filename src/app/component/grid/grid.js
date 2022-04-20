import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './grid.scss';

import { getAvailableColumn } from '../fourDots/fourDotsSlice';
import {Dots} from '../dots/dots';

//draw the game matrix and insert the discs
export function Grid(){

    var matrix = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]];

    //player will click on the column to put the disc in the column;
    function selectColumn(){

    }
    return (
        <div className="grid">
            {matrix.map((column, index) => {
                return (
                <div className="column" key={index} onClick={() => selectColumn(index)}>
                    {column.map(ele => <div className="cell" key={index.toString() + ele}></div>)}
                </div>)
            })}
        </div>
    )
}

function insertDot (){
    // let currStateOfGame = useSelector(getCurrState);

}