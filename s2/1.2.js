const words = [
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",
    "horse"
]

const forbiddenWord = "crocodile"
const minLength = 4

const filterWords = (words, forbiddenWordminLength) => words.filter((word) =>
    word !== forbiddenWord && word.length >= minLength)


console.log(filterWords(words, forbiddenWord, minLength))