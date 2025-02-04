import React from "react";
import Button from "./Button.jsx"


function Feedback ({onGoodClick, onBadClick, onNeutralClick}) {
    return (
        <div>
            <h1>Give Feedback</h1>
            <Button onClick={onGoodClick} text="Good"/>
            <Button onClick={onBadClick} text="Bad"/>
            <Button onClick={onNeutralClick} text="Neutral"/>
        </div>
    )

}

export default Feedback;