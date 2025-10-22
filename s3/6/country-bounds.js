import fetch from "node-fetch"

function getObjectFromUrl(url) {
    return new Promise(resolve => {
        fetch(url)
            .then(response => response.text())
            .then(text => resolve(JSON.parse(text)))
    })
}

function getCountryBounds(country) {
    return new Promise(resolve => {
        getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
            .then(object => resolve({
                minLatitude: object[0].boundingbox[0],
                maxLatitude: object[0].boundingbox[1],
                minLongitude: object[0].boundingbox[2],
                maxLongitude: object[0].boundingbox[3]
            }))
    })
}


getCountryBounds('Romania').then(bounds => console.log('Romania: ', bounds))
getCountryBounds('USA').then(bounds => console.log('USA: ', bounds))
getCountryBounds('Germany').then(bounds => console.log('Germany: ', bounds))