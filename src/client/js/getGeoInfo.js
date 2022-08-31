import { getWeatherInfo } from './getWeatherInfo'
import { getImage } from './getImage'
import { getCountryInfo } from './getCountryInfo'
import { packingList } from './packingList'

const getGeoInfo = async (userLocale) => {

    const thisPage = document.querySelector('.wrapper')
    const longLatCountry = await fetch(
        `http://localhost:5200/geoFetch/:${userLocale}`
        )
        .then(res => res.json())
        .then(data => {
            
        if (data.totalResultsCount == 0) {
             const imgFrame = document.getElementById('img-frame')
                imgFrame.innerHTML = `
                    <div id="geo-error-message">
                    <h2 id="err">No info available.
                    Please consider refining your entry.</h2>
                    </div>
                `
            console.log('this data has a totalResultsCount of 0')
            
        } else {
            const country = data.geonames[0].countryName
            const lat = data.geonames[0].lat
            const lon = data.geonames[0].lng

            console.log(country, lat, lon);
            
            getWeatherInfo(lat, lon)
            getImage(userLocale, country)
            getCountryInfo(country)
            packingList(country)
        }
    })
}

export { getGeoInfo }
