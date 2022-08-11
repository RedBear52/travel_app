const showUser = async (userWord) => {
    console.log(userWord)
    const hotPotataData = await fetch(`http://localhost:5200/${userWord}`)
        .then(res => res.json())
        .then(data => console.log(`Here is the data:  ${data}`))
}

export { showUser }