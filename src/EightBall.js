import React, { useState } from 'react';
import "./Eightball.css";

const messages = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]

const Eightball = ({answers=messages}) => {

    // Set default states of color and text
    const [bgColor,setBgColor] = useState('black');
    const [answer,setAnswer] = useState('Think of a question');

    function handleClick() {
        const randomIdx = Math.floor(Math.random()*answers.length);
        // const randomMsg = answers[randomIdx];
        setBgColor(answers[randomIdx].color);
        setAnswer(answers[randomIdx].msg);
      }

    return (
        <>
            <span onClick={handleClick} className="Eightball-circle" style={{backgroundColor: bgColor}} >
                <p className='Eightball-text' >{answer}</p>
            </span>
        </>
    );

}

export default Eightball;