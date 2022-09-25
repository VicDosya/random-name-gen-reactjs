import { React, useState } from 'react'
import './ButtonGen.css'

function ButtonGen() {

    //State variables
    const [valueName, setValueName] = useState('');

    //List of random names
    const namesArray = ["Pete", "Dete", "Sete", "Lete", "Mete", "Tete", "Iete", "Kete", "Lyosha"];

    //Random string picker from the namesArray
    const randomNamePicker = () => {
        const pickedName = namesArray[Math.floor(Math.random() * namesArray.length)];
        return pickedName;
    };

    //onClick function to print the pickedName from the randomNamePicker function.
    const generateRandomName = () => {
        setValueName(randomNamePicker);
    };

    return (
        <div className='mainContainer'>
            <div className='titleContainer'>
                <h1 className='mainTitle'>Random Name Generator</h1>
            </div>

            <div className='descriptionContainer'>
                <p className='mainDescription'>Press the "Generate" button to generate a random name.</p>
            </div>

            <div className='randomNameContainer'>
                <div className="randomNameText">{valueName}</div>
            </div>

            <div className='buttonContainer'>
                <button className='generateButton' onClick={generateRandomName}>Generate</button>
            </div>

        </div>
    )
};

export default ButtonGen