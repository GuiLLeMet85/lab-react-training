import React, {useState} from "react"; 

export default function ClickablePicture({img, imgClicked}) {
   
    const [picture, setPicture] = useState(img);

    const handlePicture = () => {
        const image = picture === img ? imgClicked : img;
        setPicture(image);
    }; 


    return (
            <img onClick={handlePicture} src={picture} alt="maxence" className="maxence-pict"/>
    )

}