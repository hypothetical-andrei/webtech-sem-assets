// implementați o funcție care obține lista avioanelor de deasupra României.
// bounding box-ul romaniei este luat de la nominatim openstreetmap
// avioanele pot fi luate de pe openskynetwork

async function getObjectFromUrl(url) {
    const response = await fetch(url)
    const text = await response.text()
    return JSON.parse(text)
}

async function getCountryBounds(country) {

    const object = await getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
    return {
        minLatitude: object[0].boundingbox[0],
        maxLatitude: object[0].boundingbox[1],
        minLongitude: object[0].boundingbox[2],
        maxLongitude: object[0].boundingbox[3]
    }

}
async function getPlanesOverCountry(country) {
    const bounds = await getCountryBounds(country)
    console.warn('Country bounds:', bounds)
  //  sample request for a country bounding box
  //  https://opensky-network.org/api/states/all?lamin=44.0&lomin=20.0&lamax=48.0&lomax=30.0

    const planesData = await getObjectFromUrl(`https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lomin=${bounds.minLongitude}&lamax=${bounds.maxLatitude}&lomax=${bounds.maxLongitude}`)

    const planes = planesData.states.map(plane => ({
        icao24: plane[0],
        callsign: plane[1]?.trim(),
        origin_country: plane[2],
        last_contact: plane[4],
        longitude: plane[5],
        latitude: plane[6],
        baro_altitude: plane[7],
    }))
    return planes
}

try {
    const planesOverRomania = await getPlanesOverCountry('Romania')
    console.log('Planes over Romania:', planesOverRomania)
} catch (error) {
    console.error('Error fetching planes over Romania:', error)
}