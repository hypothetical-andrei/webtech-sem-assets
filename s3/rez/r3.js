// o variantă recursiva a unei funcții de exponențiere. Atât rezultatele finale cât și cele intermediare vor fi memoizate.
const getExponentiation = (base) => {
  const cache = []
  const exponentiate = (e) => {
    if (cache[e] !== undefined) {
      console.warn("Fetching from cache for exponent:", e)
      return cache[e]
    }
    if (e === 0) {
      return 1
    }
    if (e % 2 === 0) {
      cache[e] = exponentiate(e / 2) * exponentiate(e / 2)
      return cache[e]
    } else {
      cache[e] = base * exponentiate(e - 1)
      return cache[e]
    }
  }
  return exponentiate
}

const powerOfTwo = getExponentiation(2)

console.log(powerOfTwo(5))  // 32
console.log(powerOfTwo(10)) // 1024