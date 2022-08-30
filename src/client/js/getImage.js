const getImage = async(city, country) => {

    const relevantImage = await fetch(
        `http://localhost:5200/pixaFetch/${city}/${country}`
        )
        .then(res => res.json())
        .then(imgData => {
            if (imgData.total !== 0) {
                console.log(imgData);
                const fetchedImg = imgData.hits[0].webformatURL
                const imgFrame = document.getElementById('img-frame')
                imgFrame.innerHTML = `
                    <img id="country-photo" src="${fetchedImg}">
                `
            } else {
                // const fetchedImg = '/Users/ryanspearman/Desktop/capstoneTravel/src/client/media/icons/oldtime_map_background.jpg'
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