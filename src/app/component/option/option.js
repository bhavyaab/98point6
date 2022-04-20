import React from "react";
import './option.scss';
import { RiRobotFill } from 'react-icons/ri';
import { IoPersonSharp } from 'react-icons/io5'


export function Option(){
    return (
        <div className="option">
            <li>Choose turn</li>
            <div>
                <div className="choose" >
                    <IoPersonSharp className="iconOption person" />
                    <li>I go first</li>
                </div>
                <div className="choose">
                    <RiRobotFill className="iconOption" />
                    <li>Robot go first</li>
                </div>
            </div>
        </div>
    )
}