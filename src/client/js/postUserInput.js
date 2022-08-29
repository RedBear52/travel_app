const postUserInput = async (url = '', data = {}) => {
    console.log(data)
    const res = await fetch (url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const userData = await res.json()
        console.log(userData)
        return userData
    } catch (err) {
        console.log('Post Request Error:', err);
    }
}

export { postUserInput }