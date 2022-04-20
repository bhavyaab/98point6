import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrState, selectPlayer, fetchRobotAction } from '../fourDots/fourDotsSlice';
import {Grid} from '../grid/grid';
export default function FourDots() {
    let currStateOfGame = useSelector(getCurrState);
    let currPlayer = useSelector(selectPlayer);
    const dispatch = useDispatch();
    console.log('currStateOfGame == ', currStateOfGame)
    return (
    <div>
        <h1>Four Dots</h1>
        <li>current state of application :{JSON.stringify(currStateOfGame)}</li>
        <button onClick={() => dispatch(fetchRobotAction(currStateOfGame))}>next turn </button>
        <Grid ></Grid>
        <li>{currPlayer === "me"? 'Player 1' : currPlayer === "robot"? 'Robot' : 'Player 2'} turn.</li>
    </div>
    )
}

