const checkPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            return false
        }
    }
    return true
}

if (process.argv.length <= 2) {
    console.log('not enough parameters')
} else {
    console.log(checkPrime(parseInt(process.argv[2])))
}