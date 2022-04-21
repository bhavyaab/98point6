import React from "react";
import './option.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { firstTurn, selectPlayer, reStartGame } from '../../../store/gameSlice';
import { RiRobotFill } from 'react-icons/ri';
import { IoPersonSharp } from 'react-icons/io5'


export function Option(){
    const dispatch = useDispatch();
    let player = useSelector(selectPlayer);
    return (
        <div className="option">
            <li>Choose turn</li>
            <div className="optionContainer">
                <div className={player === 'me'? 'focus':'selectionBox person'} 
                     onClick={() => dispatch(firstTurn('me'))}>
                    <IoPersonSharp className={"iconOption"} />
                    <li>I go first</li>
                </div>
                <div className={player === 'robot'? 'focus':'selectionBox robot'} 
                     onClick={() => dispatch(firstTurn('robot'))}>
                    <RiRobotFill className="iconOption" />
                    <li>Robot go first</li>
                </div>
            </div>
            <li className="marginBottom">
                <Link className="defaultButton" to="/fourDot">Start</Link>
            </li>
            <li className="marginTop">
                <Link to="/" onClick={() => dispatch(reStartGame(player))} className='defaultButton link'>Go back</Link>
            </li>
        </div>
    )
}