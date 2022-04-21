import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './fourDot.scss';
import { getCurrState, selectPlayer, fetchRobotAction , getGameState, reStartGame, getWinner} from '../../../store/gameSlice';
import {Grid} from '../grid/grid';
export default function FourDots() {
    let currStateOfGame = useSelector(getCurrState);
    let gameCurrState = useSelector(getGameState);
    let currPlayer = useSelector(selectPlayer);
    let winner = useSelector(getWinner);
    const dispatch = useDispatch();
    return (
    <div className='fourDot'>
        <h1>Four Dots</h1>
        <li>current state of application :{JSON.stringify(useSelector(getCurrState))}</li>
        <button onClick={() => dispatch(fetchRobotAction(currStateOfGame))}>next turn </button>
        <div className={((gameCurrState !== 'playing') && (gameCurrState !== 'invalid move') )? 'gameOver':'playing'}></div>
        <Grid ></Grid>
        {(gameCurrState === 'draw') && <li className='marginBottom'>Game Draw!</li>}
        {(gameCurrState === 'invalid move') && <li className='marginBottom'>Invalid move!</li>}
        {(gameCurrState === 'win') && <li className='marginBottom'>Congrats {currPlayer === "me"? 'You' : currPlayer === "robot"? 'Robot' : 'Player 2'} Wins!</li>}
        {((gameCurrState === 'win') || (gameCurrState === 'draw')) && <button className="defaultButton" onClick={() => dispatch(reStartGame(winner? winner:currPlayer))}>Play again!</button>}
        {(gameCurrState === 'playing') && <li className='marginBottom'>{currPlayer === "me"? 'Your' : currPlayer === "robot"? 'Robot' : 'Player 2'} turn.</li>}
    </div>
    )
}

