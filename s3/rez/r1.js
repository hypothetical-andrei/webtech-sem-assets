class Stream {
    #value;
    #nextvalue

    static #count = 0
    constructor(value, nextValue) {
        this.#value = value
        this.#nextvalue = nextValue
        Stream.#count++
    }

    get value() {
        return this.#value
    }

    get next() {
        this.#value = this.#nextvalue(this.#value)
        return this.#value
    }

    static get count() {
        return Stream.#count
    }
}

class ConstantStream extends Stream {
    constructor(value) {
        super(value, value => value)
    }
}

class NextIntegerStream extends Stream {
    constructor() {
        super(0, value => value + 1)
    }
}

const constant = new ConstantStream(1)
const nextInteger = new NextIntegerStream()

//  un tip obiectual care implementează un șir crescător având ca elemente toate numerele pare pornind de la o valoare dată. Constructorul primește valoarea inițială a secvenței. Singura metodă este 'next' care calculează următoarea valoare din șir. pentru numere negative, sirul porneste de la 0
class EvenIntegerStream extends Stream {
    constructor(startValue) {
        let initialValue = startValue < 0 ? 0 : (startValue % 2 === 0 ? startValue : startValue - 1);
        super(initialValue, value => value + 2);
    }
}

const evenInteger = new EvenIntegerStream(3);

for (let i = 0; i < 10; i++) {
    console.log(`constant[${i}] = ${constant.next}`)
    console.log(`nextInteger[${i}] = ${nextInteger.next}`)
    console.log(`evenInteger[${i}] = ${evenInteger.next}`)
}

console.log(Stream.count)
