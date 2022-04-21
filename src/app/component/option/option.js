import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { firstTurn, selectPlayer } from '../../../store/gameSlice';
import './option.scss';
import { RiRobotFill } from 'react-icons/ri';
import { IoPersonSharp } from 'react-icons/io5'


export function Option(){
    const dispatch = useDispatch();
    let player = useSelector(selectPlayer);
    return (
        <div className="option">
            <li>Choose turn</li>
            <div className="optionContainer">
                <div className={player == 'me'? 'focus':'selectionBox person'} 
                     onClick={() => dispatch(firstTurn('me'))}>
                    <IoPersonSharp className={"iconOption"} />
                    <li>I go first</li>
                </div>
                <div className={player == 'robot'? 'focus':'selectionBox robot'} 
                     onClick={() => dispatch(firstTurn('robot'))}>
                    <RiRobotFill className="iconOption" />
                    <li>Robot go first</li>
                </div>
            </div>
            
            <Link className="defaultButton link" to="/fourDot">Start</Link>
        </div>
    )
}