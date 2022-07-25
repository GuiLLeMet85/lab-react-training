import React from "react";

export default function BoxColor(props) {

    const bgColor = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }

    return (
        <div style={bgColor} className="boxcolor">
            <p>rgb(${props.r}, ${props.g}, ${props.b})</p>
        </div>
   )
}