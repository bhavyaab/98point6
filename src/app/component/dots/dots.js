import React from "react";
import './dots.scss';

// <Dots player='robot'></Dots>

export function Dots (props){
    var dotColor = props.player == 'me'? 'pink':'green';
    return <div className={"dots " + dotColor}></div>
} 