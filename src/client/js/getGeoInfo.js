import { getWeatherInfo } from './getWeatherInfo'
import { getImage } from './getImage'
import { getCountryInfo } from './getCountryInfo'
import { packingList } from './packingList'

const getGeoInfo = async (userLocale) => {
    const thisPage = document.querySelector('.wrapper')
    // const thisBody = document.querySelectorAll('body')
    
    const longLatCountry = await fetch(
        `http://localhost:5200/geoFetch/:${userLocale}`
        )
        .then(res => res.json())
        .then(data => {
            
        if (data.totalResultsCount == 0) {
            thisPage.classList.toggle('black-out') 
            // thisBody.classList.toggle('hidden')
            console.log('this data has a totalResultsCount of 0')
            // alert(`0 results!`)
            // thisPage.classList.toggle('black-out')
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
