import { React, useState } from 'react'
import styles from './ButtonGen.module.css';
import randomWords from 'random-words'; //npm package
import Badges from './Badges';

//number constants
const MAX_WORD_GENERATION_RETRY_COUNT = 5;
const MAX_DISLIKED_WORDS_COUNT = 20;
const MAX_FAVORITE_WORDS_COUNT = MAX_DISLIKED_WORDS_COUNT;

function ButtonGen() {

    //State variables
    const [generatedWord, setGeneratedWord] = useState('');
    const [error, setError] = useState('');
    const [favWords, setFavWords] = useState([]);
    const [dislikedWords, setDislikedWords] = useState([]);

    //onClick function to print the pickedName from the randomNamePicker function.

    const generateRandomWord = (retryCount = 0) => {
        const newGeneratedWord = randomWords();
        if (!dislikedWords.includes(newGeneratedWord)) {
            setGeneratedWord(newGeneratedWord);
        } else {
            console.log('Duplicated word detected... skipping');
            if (retryCount < MAX_WORD_GENERATION_RETRY_COUNT) {
                generateRandomWord(retryCount++);
            }
        }

        setError('');
    };

    //onClick function to save favorite words.
    const favButtonHandler = () => {
        if (generatedWord === '') {
            setError('Cant save empty');
        } else if (favWords.includes(generatedWord)) {
            setError('Cant save duplicates');
        } else if (favWords.length > MAX_FAVORITE_WORDS_COUNT) {
            setError('Cant fav no more');
        } else {
            setFavWords([...favWords, generatedWord]);
            setError('');
        }
        setGeneratedWord('');
    };

    //onClick function to dislike words
    const dislikeButtonHandler = () => {
        if (generatedWord === '') {
            setError('Cant dislike empty');
        } else if (dislikedWords.includes(generatedWord)) {
            setError('Cant dislike duplicates');
        } else if (dislikedWords.length > MAX_DISLIKED_WORDS_COUNT) {
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

            <Badges values={favWords} setValues={setFavWords} title="Favorites:"></Badges>
            <Badges badgeColor="black" values={dislikedWords} setValues={setDislikedWords} title="Disliked:"></Badges>

        </div>
    )
};

export default ButtonGen