let evenCollection = document.querySelectorAll("tbody tr:nth-child(even)")
let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)")

if (evenCollection && evenCollection.length > 0) {
    for (let item of evenCollection)
        item.bgColor = 'red'
}

if (oddCollection && oddCollection.length > 0) {
    for (let item of oddCollection)
        item.bgColor = 'yellow'
}