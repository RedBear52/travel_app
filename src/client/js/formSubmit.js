import { getGeoInfo } from "./getGeoInfo"

const formSubmit = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()
console.log('button done been clicked')
    let locationValue = document.getElementById('client-text').value
    console.log(locationValue)
    getGeoInfo(locationValue)
    })
}

export { formSubmit }
