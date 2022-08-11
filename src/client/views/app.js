// import { formSubmit } from '../js/formSubmit.js'

// const { showUser } = require("../js/showUser")

// const { showUser } = require("../js/showUser")

// console.log('form submitting')
// formSubmit()

// export { formSubmit }

const clearEle = (ele) => {
    ele.innerHTML=``
    console.log(ele)
}

const dataCrunch = async (userWord) => {
    console.log(userWord)
    const hotPotataData = await fetch(`http://localhost:5200/${userWord}`)
        .then(res => res.json())
            const filteredData = hotPotataData.map(tate => tate.shortdef[0])
            const indexedData = filteredData[0]
            console.log(indexedData)
            showUser(indexedData)
        }


const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()

    let clientWord = document.getElementById('client-text').value
    console.log(clientWord)
    dataCrunch(clientWord)
})

const showUser = (transWord) => {
    console.log(`Showing user the translated word:  ${transWord}`)
    const paragraph = document.getElementById('word-list')
    console.log(paragraph)
    const transWordEle = document.createElement('p')
    return clearEle(transWordEle)
    
    // transWordEle.innerHTML=`${transWord}`
    // console.log(transWordEle)
    // paragraph.append(transWordEle)
}