import React from "react";

    export default function Rating(props) {

            const {children} = props

            let rating;
               
            if (children < 1) {
                rating = "☆☆☆☆☆"
            }
            else if (children >= 1 && children < 1.5) {
                rating = "★☆☆☆☆"
            }
            else if (children >= 2 && children < 2.5) {
                rating = "★★☆☆☆"
            }
            else if (children >= 3 && children < 3.5) {
                rating = "★★★☆☆"
            }
            else if (children >= 4 && children < 4.5) {
                rating = "★★★★☆"
            }
            else if (children >= 4.5) {
                rating = "★★★★★"
            }

        return (
            <div className="stars">
                {rating}
            </div>

        )
}