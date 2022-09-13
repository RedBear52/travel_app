import { countDownCalculator } from './countDownCalculator'
import { getGeoInfo } from './getGeoInfo'
import { tripLength } from './tripLength'
import { postUserInput } from './postUserInput'
/*formSubmit function: 
Grabbing ELEs, adding Listeners, collecting client data &
passing collected data on to other modules
*/
const formSubmit = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()

    const formContainer = document.getElementById('homepage_entry-form')
    formContainer.setAttribute('class', 'hidden')
    const wrapState = document.getElementById('wrapper')
    wrapState.classList.toggle('submitted')

    const listEle = document.getElementById('timer-li')
    listEle.classList.toggle('hidden')
    let locationValue = document.getElementById('destination').value
    let departureValue = document.getElementById('travel-date').value
    let returnValue = document.getElementById('return-date').value

        getGeoInfo(locationValue)
        countDownCalculator(departureValue, locationValue)
        tripLength(departureValue, returnValue)
        postUserInput(`http://localhost:5200/post`, {
            'userLocale': locationValue,
            'departTime': departureValue,
            'returnTime': returnValue
        })
    })
}

export { formSubmit }
