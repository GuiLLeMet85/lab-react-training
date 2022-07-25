import React from "react";

export default function Random(props) {

    let {min, max} = props;
    
    min = Math.floor(Math.random() * 6);
    max = Math.floor(Math.random() * 100);

    return (
        <>
        <div className = "minmaxrandom">
            <p>Min random value between 1 and 6 is <strong>{min}</strong></p>
        </div>
        <div className = "minmaxrandom">
            <p>Max random value between 1 and 100 is <strong>{max}</strong></p>
        </div>
        </>
   )
}

