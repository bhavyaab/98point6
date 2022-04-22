import React from "react";
import './option.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { firstTurn, selectPlayer} from '../../../store/gameSlice';
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
                     onClick={() => dispatch(firstTurn({singlePlayer: true, player: 'me'}))}>
                    <IoPersonSharp className={"iconOption"} />
                    <li>I go first</li>
                </div>
                <div className={player === 'robot'? 'focus':'selectionBox robot'} 
                     onClick={() => dispatch(firstTurn({singlePlayer: true, player: 'robot'}))}>
                    <RiRobotFill className="iconOption" />
                    <li>Robot go first</li>
                </div>
            </div>
            <li className="marginBottom">
                <Link onClick={() => dispatch(firstTurn({singlePlayer: true, player: player}))} className="defaultButton" to="/fourDot">Start</Link>
            </li>
            <li className="marginTop">
                <Link to="/oneOrTwoPlayer" onClick={() => dispatch(firstTurn({singlePlayer: true}))} className='defaultButton link'>Go back</Link>
            </li>
        </div>
    )
}