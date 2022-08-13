import { getWeatherInfo } from './getWeatherInfo'

const getGeoInfo = async (userLocale) => {
    console.log(userLocale)
    const longLatCountry = await fetch(
        `http://localhost:5200/geoFetch/:${userLocale}`
        )
        .then(res => res.json())
        .then(data => {
            const geoData = data.geonames[0]
            const country = data.geonames[0].countryName
            const lat = data.geonames[0].lat
            const lon = data.geonames[0].lng

            getWeatherInfo(lat, lon)
        })
}

export { getGeoInfo }
