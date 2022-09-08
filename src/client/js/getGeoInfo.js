import { getWeatherInfo } from './getWeatherInfo'
import { getImage } from './getImage'
import { getCountryInfo } from './getCountryInfo'
import { packingList } from './packingList'

/* getGeoInfo function: 
Make GET request, parse to json, conditionally handle response object error & alert the user
OR process sucessful response and render new info to UI
*/
const getGeoInfo = async (userLocale) => {
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
        } else {
            const country = data.geonames[0].countryName
            const lat = data.geonames[0].lat
            const lon = data.geonames[0].lng
            
            getWeatherInfo(lat, lon)
            getImage(userLocale, country)
            getCountryInfo(country)
            packingList(country)
        }
    })
}

export { getGeoInfo }