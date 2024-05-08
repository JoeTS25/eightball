import React, {useState} from "react";

import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { random } from "./random";

function EightBall({answers = defaultAnswers}) {
    const [answer, setAnswer] = useState({
        msg: "Think of a question",
        color: "black",
    });

    function handleClick(e) {
        setAnswer(random(answers));
    }

    return (
        <div 
        className="EightBall"
        onClick={handleClick}
        style={{ backgroundColor: answer.color}}>
            {answer.msg}
        </div>
    )
}

export default EightBall;