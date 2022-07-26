import React from "react";
import visa from "../assets/images/visa.png"
import mastercard from "../assets/images/master-card.svg"


export default function CreditCard(props) {

    const {type, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    const styleCard = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }
    const numberCard = `**** **** **** ` + props.number.slice(12);

    let pictureCard;
        switch(type) {
            case "Visa":
                pictureCard = visa;
                break;
            case "Master Card":
                pictureCard = mastercard;
                break;
            default: pictureCard = " ";
        }

    return (
            <div style={styleCard} className='cardTarget'>
                <img src={pictureCard} alt="card logo" className="logoCard"/>   
                <p className="numbers-card">{numberCard}</p>
                <p className="text-card">Expires {expirationMonth}/{expirationYear} <span className="bank">{bank}</span></p>
                <p className="text-card">{owner}</p>
                
            </div>
    )
}