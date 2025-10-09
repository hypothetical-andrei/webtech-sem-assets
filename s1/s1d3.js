function occurences(text, character) {
    let count = 0
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === character) {
            count++
        }
    }
    return count;
}

console.log(occurences("sample text", "e"));