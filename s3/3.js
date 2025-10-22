function fibGen() {
    const cache = [1, 1]
    const fib = (index) => {
        if (index < cache.length) {
            console.log('found ' + index)
            return cache[index]
        } else {
            console.log('calculated ' + index)
            cache[index] = fib(index - 1) + fib(index - 2)
            return cache[index]
        }
    }
    return fib
}

const fib = fibGen()
console.log(fib(1))
console.log(fib(5))
console.log(fib(3))