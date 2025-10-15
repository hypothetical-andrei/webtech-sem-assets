const sampleDictionary = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']

const sampleText = `
    best
    read
    on
    windy
    nights
`
const checkAcrostic = (text, dictionary) => {
    const candidate = text.split('\n').filter(e => e).map(e => e.trim()).map(e => e[0]).join('')

    return dictionary.indexOf(candidate) !== -1
}

console.log(checkAcrostic(sampleText, sampleDictionary))