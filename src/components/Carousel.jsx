import React, {useState} from "react";

export default function Carousel({images}) {
    const [image, setImage] = useState(0)

    const nextPicture = () => {
        const increment = image === images.length - 1 ? 0 : image + 1;
        setImage(increment);
    }

    const previousPicture = () => {
        const decrement = image === 0 ? images.length - 1 : image - 1;
        setImage(decrement); 
    }

    return (
        <>
        <div className="carousel-pict">
            <img src={images[image]} alt="carousel profile" />
            <div className="bts-carrousel">
                <button onClick={previousPicture}>⏪</button>
                <button onClick={nextPicture}>⏩</button>
            </div>
        </div>
        </>
    )

}