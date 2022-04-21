import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrState, selectPlayer, fetchRobotAction } from '../../../store/gameSlice';
import {Grid} from '../grid/grid';
export default function FourDots() {
    let currStateOfGame = useSelector(getCurrState);
    let currPlayer = useSelector(selectPlayer);
    const dispatch = useDispatch();
    return (
    <div>
        <h1>Four Dots</h1>
        <li>current state of application :{JSON.stringify(useSelector(getCurrState))}</li>
        <button onClick={() => dispatch(fetchRobotAction(currStateOfGame))}>next turn </button>
        <Grid ></Grid>
        <li>{currPlayer === "me"? 'Your' : currPlayer === "robot"? 'Robot' : 'Player 2'} turn.</li>
    </div>
    )
}

