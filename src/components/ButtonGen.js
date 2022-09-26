import { React, useState } from 'react'
import styles from './ButtonGen.module.css';
import randomWords from 'random-words';

function ButtonGen() {

    //State variables
    const [valueName, setValueName] = useState('');

    //Random string picker from the namesArray
    const randomNamePicker = () => {
        const pickedName = randomWords();
        return pickedName;
    };

    //onClick function to print the pickedName from the randomNamePicker function.
    const generateRandomName = () => {
        setValueName(randomNamePicker);
    };

    //JSX
    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <h1 className={styles.mainTitle}>Random Word Generator</h1>
            </div>

            <div className={styles.descriptionContainer}>
                <p className={styles.mainDescription}>Press the "Generate" button to generate a random word.</p>
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