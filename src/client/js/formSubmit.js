import { countDownCalculator } from "./countDownCalculator"
import { getGeoInfo } from "./getGeoInfo"

const formSubmit = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()

    let locationValue = document.getElementById('destination').value
    let departureValue = document.getElementById('travel-date').value

    console.log(locationValue)
    console.log(departureValue)
    getGeoInfo(locationValue)
    countDownCalculator(departureValue)
    })
}

export { formSubmit }
