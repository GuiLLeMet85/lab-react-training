import React from "react";

export default function CreditCard(props) {

    const {type, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    const styleCard = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }
    const numberCard = `**** **** ****` + props.number.slice(12);

    



    return (
            <div style={styleCard} className='card'>
                <p>{type}</p>
                <p>{numberCard}</p>
                <p>{expirationMonth}</p>
                <p>{expirationYear}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </div>
    )
}