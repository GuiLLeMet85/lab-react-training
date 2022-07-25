import React from "react";

export default function Greeting(props) {

    const {lang, children} = props   
    let greeting;

        switch(lang) {
            case "de":
                greeting = "Hallo ";
                break;
            case "en":
                greeting = "Hello ";   
                break;
            case "fr":
                greeting = "Bonjour ";
                break;
            case "es":
                greeting = "Hola ";
                break;
            default: greeting = "Holi ";
                break;
        }
    return (
        <div className="greeting">
            {greeting}{children}
        </div>
    )
}

