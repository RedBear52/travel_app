const getImage = async(city, country) => {

    const relevantImage = await fetch(
        `http://localhost:5200/pixaFetch/${city}/${country}`
        )
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData)
            
            const fetchedImg = imgData.hits[0].largeImageURL

            const imgFrame = document.getElementById('img-frame')
            const imgEle = document.createElement('img')
            imgFrame.innerHTML = `
            <h3>Here's a pic of your destination:</h3>
                <img src="${fetchedImg}" width="600px" height="600px">
            `
            console.log(imgFrame);
            console.log(imgEle);
    })
}

export { getImage }