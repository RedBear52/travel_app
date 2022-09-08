const getImage = async(city, country) => {
/* getImage function: 
Make GET request server/pixabay, parse res to json, conditionally handle response err (no img) & alert the user
OR process sucessful response and render new image to UI
*/
    const relevantImage = await fetch(
        `http://localhost:5200/pixaFetch/${city}/${country}`
        )
        .then(res => res.json())
        .then(imgData => {
            if (imgData.total !== 0) {
                const fetchedImg = imgData.hits[0].webformatURL
                const imgFrame = document.getElementById('img-frame')
                imgFrame.innerHTML = `
                    <img id="country-photo" src="${fetchedImg}">
                `
            } else {
                const imgFrame = document.getElementById('img-frame')
                imgFrame.innerHTML = `
                    <div id="img-error-message">
                    <h2>No image currently available for this location</h2>
                    </div>
                `
            }
    })
}

export { getImage }