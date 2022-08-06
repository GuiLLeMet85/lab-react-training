import React, { useState } from "react";

export default function LikeButton() {
    const [counter, setCounter] = useState(0);

    const handelLikes = () => {
        setCounter (count => count + 1)
    }
    const bkcolors =['purple','blue','green','yellow','orange','red']
    const randomBkcolor = bkcolors[Math.floor(Math.random() * bkcolors.length)]
    const colorBk = {backgroundColor: randomBkcolor}


    return (
    <button onClick={handelLikes} style={colorBk} className="bt-like" >{counter}{counter !== 1 && ' Likes'}{counter === 1 &&  'Like'}</button>
    )
}