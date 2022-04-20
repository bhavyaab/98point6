import React from "react";
import './welcome.scss';
import { Link } from 'react-router-dom';

export function Welcome (){
    return(
        <div className="welcome">
            <li>Welcome to </li>
            <li>Four Dots!</li>
            <Link className="defaultButton" to="/option">Let's Play</Link>
        </div>
    )
}