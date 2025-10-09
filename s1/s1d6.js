const sampleString = 'the quick brown fox jumps over the lazy dog'

const getCounts = (text) => {
    const words = text.split(' ')
    const result = {}
    for (let word of words) {
        if (word in result) {
            result[word]++
        } else {
            result[word] = 1
        }

    }
    for (let word in result) {
        result[word] /= words.length
    }
    return result
}

console.log(getCounts(sampleString))