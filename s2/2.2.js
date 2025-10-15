const getTotalArea = (squareDimensions) =>
    squareDimensions.map((side) => side * side).reduce((prev, current) => prev + current, 0)


const squareDimensions = [3, 5, 12, 3, 5, 3]

const result = getTotalArea(squareDimensions)
console.log("result: ", result)