import { countDownCalculator } from './countDownCalculator'
import { getGeoInfo } from './getGeoInfo'
import { tripLength } from './tripLength'

const formSubmit = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()

    const form = document.getElementById('user-entry')
    form.classList+='hidden'

    let locationValue = document.getElementById('destination').value
    let departureValue = document.getElementById('travel-date').value
    let returnValue = document.getElementById('return-date').value

    console.log(locationValue)
    console.log(departureValue)
    console.log(returnValue)
    getGeoInfo(locationValue)
    countDownCalculator(departureValue, locationValue)
    tripLength(departureValue, returnValue)
    })
}

export { formSubmit }
