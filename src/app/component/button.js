import React from "react";


export function Button(props){
    return <button className='defaultButton' onClick={() => props.onClick()} >{props.buttonText || 'buttonText not recieved'}</button>
}