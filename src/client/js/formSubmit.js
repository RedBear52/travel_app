import { countDownCalculator } from './countDownCalculator'
import { getGeoInfo } from './getGeoInfo'
import { tripLength } from './tripLength'

const formSubmit = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()

    const formContainer = document.getElementById('homepage_entry-form')
    formContainer.setAttribute('class', 'hidden')

    const listEle = document.getElementById('timer-li')
    listEle.classList.toggle('hidden')
    let locationValue = document.getElementById('destination').value
    let departureValue = document.getElementById('travel-date').value
    let returnValue = document.getElementById('return-date').value

    getGeoInfo(locationValue)
    countDownCalculator(departureValue, locationValue)
    tripLength(departureValue, returnValue)
    })
}

export { formSubmit }
