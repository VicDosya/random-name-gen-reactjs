import { React, useState } from 'react'
import styles from './ButtonGen.module.css';
import randomWords from 'random-words';
import Badges from './Badges';

function ButtonGen() {

    //State variables
    const [generatedWord, setGeneratedWord] = useState('');
    const [error, setError] = useState('');
    const [favWords, setFavWords] = useState([]);
    const [dislikedWords, setDislikedWords] = useState([]);

    //onClick function to print the pickedName from the randomNamePicker function.
    const generateRandomWord = () => {
        setGeneratedWord(randomWords());
        setError('');
    };

    //onClick function to save favorite words.
    const favButtonHandler = () => {
        if (generatedWord === '' || generatedWord === 'Cant save empty') {
            setError('Cant save empty');
        } else if (favWords.includes(generatedWord)) {
            setError('Cant save duplicates');
        } else if (favWords.length > 20) {
            setError('Cant fav no more');
        } else if (generatedWord === dislikedWords) {
            console.log('Disliked word detected, skipping...');
            setFavWords([...favWords, generatedWord]);
        } else {
            setFavWords([...favWords, generatedWord]);
            setError('');
        }
        setGeneratedWord('');
    };

    //onClick function to dislike words
    const dislikeButtonHandler = () => {
        if (generatedWord === '' || generatedWord === 'Cant dislike empty') {
            setError('Cant dislike empty');
        } else if (dislikedWords.includes(generatedWord)) {
            setError('Cant dislike duplicates');
        } else if (dislikedWords.length > 20) {
            setError('Cant dislike no more');
        } else {
            setDislikedWords([...dislikedWords, generatedWord]);
            setError('');
        }
        setGeneratedWord('');
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
                    <button className={styles.dislikeButton} onClick={dislikeButtonHandler}>👎</button>
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.generateButton} onClick={generateRandomWord}>Generate</button>
            </div>

            <Badges values={favWords} title="Favorites:"></Badges>
            <Badges badgeColor="black" values={dislikedWords} title="Disliked:"></Badges>

        </div>
    )
};

export default ButtonGen