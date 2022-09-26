import { React, useState } from 'react'
import styles from './ButtonGen.module.css';

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
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <h1 className={styles.mainTitle}>Random Name Generator</h1>
            </div>

            <div className={styles.descriptionContainer}>
                <p className={styles.mainDescription}>Press the "Generate" button to generate a random name.</p>
            </div>

            <div className={styles.randomNameContainer}>
                <div className={styles.randomNameText}>{valueName}</div>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.generateButton} onClick={generateRandomName}>Generate</button>
            </div>

        </div>
    )
};

export default ButtonGen