 /* postuUserInput function: 
Make POST request to server, sending client-inoputted data
to be processed and stored in the projectDB(database)
*/  
const postUserInput = async (url = '', data = {}) => {
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
        return userData
    } catch (err) {
        console.log('Post Request Error:', err);
    }
}

export { postUserInput }