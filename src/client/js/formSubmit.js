import { showUser } from "./showUser"

const formSubmit = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()

    let clientWord = document.getElementById('client-text').value
    console.log(clientWord)
    showUser(clientWord)
    })
}

export { formSubmit }
