import React from "react";

const Game = props => (

        <div className = "center col-3">
            <img  onClick = {() => 
            props.onClick(props.alt)}  
            key={ props.alt } 
            src={ props.src } 
            alt={ props.alt } />
        </div>
);
export default Game;