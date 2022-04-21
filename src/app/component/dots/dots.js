import React from "react";
import { useSelector } from "react-redux";
import './dots.scss';

import { getGridState } from "../../../store/gameSlice";

export function Dots (props){
    var {x ,y} = props
    var dotColor;
    var player = useSelector(getGridState)[x][y]['player'];  
      
    dotColor = player? (player === 'me')? 'pink':'green' : 'white';
    return <div className={"dots " + dotColor}></div>
} 