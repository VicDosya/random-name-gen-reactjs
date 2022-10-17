const randomWords = require('random-words');
const express = require("express");
const app = express();

//Variables Store
let favoriteWords = [];
let dislikedWords = [];
const FAVORITE_WORDS_LIMIT = 10;
const DISLIKED_WORDS_LIMIT = 10;

//Routes:
//Load
app.get('/load', (req, res) => {
    res.send({
        favoriteWords,
        dislikedWords
    });
});

//Generate a new word
app.get('/generate', (req, res) => {
    for (i = 0; i < 5; i++) {
        generatedWord = randomWords();
        if (dislikedWords.includes(generatedWord)) {
            console.log('disliked word detected, skipping...');
        } else {
            return res.send({ generatedWord });
        }
    };
    res.send({ errorMessage: "Generation retry exceeded the max count." });
});

/**
 * Favorite a word   -> This route should recieve an object with a 'word'.
 * {
 *      word: 'banana'
 * }
 */
app.post('/favorite', (req, res) => {
    if (req.body.word === '') {
        res.send({ favoriteWords, errorMessage: "Can't save empty" });
    } else if (favoriteWords.includes(req.body.word)) {
        res.send({ favoriteWords, errorMessage: "Can't save duplicates" });
    } else if (favoriteWords.length > FAVORITE_WORDS_LIMIT - 1) {
        res.send({ favoriteWords, errorMessage: "Can't favorite no more" });
    } else {
        favoriteWords.push(req.body.word);
        res.send({ favoriteWords });
    }
});


/**
 * Dislike a word   -> This route should recieve an object with a 'word'.
 * {
 *      word: 'banana'
 * }
 */
app.post('/dislike', (req, res) => {
    if (req.body.word === '') {
        res.send({ dislikedWords, errorMessage: "Can't dislike empty" });
    } else if (dislikedWords.includes(req.body.word)) {
        res.send({ dislikedWords, errorMessage: "Can't dislike duplicates" });
    } else if (dislikedWords.length > DISLIKED_WORDS_LIMIT - 1) {
        res.send({ dislikedWords, errorMessage: "Can't dislike no more" });
    } else {
        dislikedWords.push(req.body.word);
        res.send({ dislikedWords });
    }
});

//Remove from Favorites
app.post('/removeFavorite', (req, res) => {
    favoriteWords = favoriteWords.filter((word) => word !== req.body.word);
    res.send({ favoriteWords });
});

//Remove from Dislikes
app.post('/removeDislike', (req, res) => {
    dislikedWords = dislikedWords.filter((word) => word !== req.body.word);
    res.send({ dislikedWords });
});

module.exports = app;
