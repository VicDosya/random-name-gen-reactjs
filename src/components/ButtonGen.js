import { React, useState } from 'react'
import styles from './ButtonGen.module.css';
import randomWords from 'random-words';
import Badges from './Badges';

function ButtonGen() {

    //State variables
    const [generatedWord, setGeneratedWord] = useState('');
    const [error, setError] = useState('');
    const [favWords, setFavWords] = useState([]);


    //Random string picker from the namesArray
    const randomWordPicker = () => {
        const pickedWord = randomWords();
        return pickedWord;
    };

    //onClick function to print the pickedName from the randomNamePicker function.
    const generateRandomWord = () => {
        setGeneratedWord(randomWordPicker);
        setError('');
    };

    //onClick function to save favorite words.
    const favButtonHandler = () => {
        if (generatedWord === '' || generatedWord === 'Cant save empty') {
            setError('Cant save empty');
        } else if (favWords.includes(generatedWord) || generatedWord === 'Cant save duplicates' || favWords === '') {
            setError('Cant save duplicates');
        } else if (favWords.length > 20) {
            setError('Cant fav no more');
        }
        else {
            setFavWords(prevFavWords => [...prevFavWords, generatedWord]);
            setError('');
        }
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

            <div className={styles.errorContainer}>
                <div className={styles.errorText}>{error}</div>
            </div>

            <div className={styles.randomWordContainer}>
                <div className={styles.randomWordText}>{generatedWord}
                    <button className={styles.heartButton} onClick={favButtonHandler}>❤</button>
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.generateButton} onClick={generateRandomWord}>Generate</button>
            </div>

            <Badges values={favWords}></Badges>


        </div>
    )
};

export default ButtonGen