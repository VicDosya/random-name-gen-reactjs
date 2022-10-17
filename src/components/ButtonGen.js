import { React, useState, useEffect } from 'react'
import styles from './ButtonGen.module.css';
import Badges from './Badges';
import axios from 'axios';

function ButtonGen() {

    //State variables
    const [generatedWord, setGeneratedWord] = useState('');
    const [error, setError] = useState('');
    const [favWords, setFavWords] = useState([]);
    const [dislikedWords, setDislikedWords] = useState([]);

    //Onload data
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await axios.get('/api/load');
        setFavWords(res.data.favoriteWords);
        setDislikedWords(res.data.dislikedWords);
    };

    //Generate word
    const generateButtonHandler = async () => {
        const res = await axios.get('/api/generate');
        setGeneratedWord(res.data.generatedWord);
        setError(res.data.errorMessage);
    };

    //Favorite word
    const favButtonHandler = async () => {
        const res = await axios.post('/api/favorite', { word: generatedWord });
        setGeneratedWord('');
        setFavWords(res.data.favoriteWords);
        setError(res.data.errorMessage);
    };

    //Remove a Favorite word
    const removeFavorite = async (word) => {
        const res = await axios.post('/api/removeFavorite', { word });
        setFavWords(res.data.favoriteWords);
    }

    //Dislike word
    const dislikeButtonHandler = async () => {
        const res = await axios.post('/api/dislike', { word: generatedWord });
        setGeneratedWord('');
        setDislikedWords(res.data.dislikedWords);
        setError(res.data.errorMessage);
    };

    //Remove a Disliked word
    const removeDisliked = async (word) => {
        const res = await axios.post('/api/removeDislike', { word });
        setDislikedWords(res.data.dislikedWords);
    }

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
                <button className={styles.generateButton} onClick={generateButtonHandler}>Generate</button>
            </div>

            <Badges values={favWords} badgeOnClick={removeFavorite} title="Favorites:"></Badges>
            <Badges badgeColor="black" values={dislikedWords} badgeOnClick={removeDisliked} title="Disliked:"></Badges>

        </div>
    )
};

export default ButtonGen