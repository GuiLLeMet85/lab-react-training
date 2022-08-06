import React from "react";

    export default function DriverCard(props) {
        const {name, rating, img, car} = props;
        const ratingRounded = Math.round(rating);

        let ratingDC;
            switch (ratingRounded) {
                case "0":
                    ratingDC = "☆☆☆☆☆";
                    break;
                case "1":
                    ratingDC = "★☆☆☆☆";
                    break;
                case "2":
                    ratingDC = "★★☆☆☆";
                    break;
                case "3":
                    ratingDC = "★★★☆☆;"
                    break;
                case "4":
                    ratingDC = "★★★★☆"
                    break;
                case "5":
                    ratingDC = "★★★★★"
                    break;
                default: ratingDC = "★★★★☆" 
                    break;
            }
            return (
                <div className="driverCard">
                    <img src = {img} alt = "drive card profile"/>
                    <div className="infoDC">
                        <p className="nameDC">{name}</p>
                        <p className="starsDC">{ratingDC}</p>
                        <p className="modelDC">{car.model} {car.licensePlate}</p>
                    </div>
                </div>
            )
    }