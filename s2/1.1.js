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

const filterWords = (words, forbiddenWord, minLength) => {
    const result = words.filter((word) => {
        if (word !== forbiddenWord && word.length >= minLength) {
            return true
        }
        return false
    })
    return result
}

console.log(filterWords(words, forbiddenWord, minLength))