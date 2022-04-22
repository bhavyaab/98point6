import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { firstTurn, isSinglePlayer } from '../../../store/gameSlice';
import './option.scss';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoPersonSharp } from 'react-icons/io5'


export function OneOrTwoPlayer(){
    const dispatch = useDispatch();
    let singlePlayer = useSelector(isSinglePlayer);
    return (
        <div className="option">
            <li>Choose turn</li>
            <div className="optionContainer">
                <div className={singlePlayer? 'focus':'selectionBox person'} 
                     onClick={() => dispatch(firstTurn({singlePlayer: true}))}>
                    <IoPersonSharp className={"iconOption"} />
                    <li>Single Player</li>
                </div>
                <div className={!singlePlayer? 'focus':'selectionBox robot'} 
                     onClick={() => dispatch(firstTurn({singlePlayer: false, player: 'me'}))}>
                    <BsFillPeopleFill className="iconOption" />
                    <li>Double Player</li>
                </div>
            </div>
            <Link className="defaultButton link" to={singlePlayer? "/option" : "/fourDot"}>Next</Link>
            <li className="marginTop">
                <Link to="/" className='defaultButton link'>Go Home</Link>
            </li>
        </div>
    )
}