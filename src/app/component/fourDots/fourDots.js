import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { isSinglePlayer, getMatrixState, selectPlayer, fetchRobotAction , getGameState, getWinner, firstTurn} from '../../../store/gameSlice';
import {Grid} from '../grid/grid';
import './fourDot.scss';
export default function FourDots() {
    let matrix = useSelector(getMatrixState);
    let gameCurrState = useSelector(getGameState);
    let currPlayer = useSelector(selectPlayer);
    let winner = useSelector(getWinner);
    let singlePlayer = useSelector(isSinglePlayer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const actionDispatch = async () => {
            if(currPlayer === 'robot')  dispatch(fetchRobotAction(matrix));
        }
        actionDispatch();
    }, [currPlayer, dispatch, matrix]);
    return (
    <div className='fourDot'>
        <h1>Four Dots</h1>
        <div className={(currPlayer === 'robot')? 'gameOver':'playing'}></div>
        <Grid ></Grid>
        {(gameCurrState === 'draw') && <li className='marginBottom'>Game Draw!</li>}
        {(gameCurrState === 'invalid move') && <li className='marginBottom'>Invalid move!</li>}
        {(gameCurrState === 'win') && <li className='marginBottom'>Congrats {currPlayer === "me"? 'You' : currPlayer === "robot"? 'Robot' : 'Player 2'} Wins!</li>}
        {((gameCurrState === 'win') || (gameCurrState === 'draw')) && <button className="defaultButton marginBottom btn" onClick={() => dispatch(firstTurn({singlePlayer: singlePlayer, player:winner? winner:currPlayer}))}>Play again!</button>}
        {(gameCurrState === 'playing') && <li className='marginBottom'>{currPlayer === "me"? 'Your' : currPlayer === "robot"? 'Robot' : 'Player 2'} turn.</li>}
         <li><Link to={(singlePlayer)? "/option": "/oneOrTwoPlayer"} onClick={() => dispatch(firstTurn({singlePlayer: singlePlayer, player:currPlayer}))} className='marginTop defaultButton'>Go back</Link></li>
    </div>
    )
}

