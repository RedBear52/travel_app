const getGeoInfo = async (userLocale) => {
    console.log(userLocale)
    const longLatCountry = await fetch(
        `http://localhost:5200/weatherGrab/:${userLocale}`
        )
        .then(res => res.json())
        .then(data => {
            console.log(data.geonames[0])
            console.log(data.geonames[0].countryName)
            console.log(data.geonames[0].lat)
            console.log(data.geonames[0].lng)
        })
}

export { getGeoInfo }