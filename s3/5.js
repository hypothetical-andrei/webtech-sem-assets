const orderCoffee = (type) => {

    const types = {
        REGULAR: 'REGULAR',
        SPECIAL: 'SPECIAL'
    }

    if (Object.values(types).indexOf(type) === -1) {
        throw new Error('coffee error')
    } else {
        console.log(`preparing ${type} coffee`)
    }
}

try {
    orderCoffee('REGULAR')
    orderCoffee('SWEET_COFFEE_NO_SUGAR')
} catch (err) {
    console.log(err)
}