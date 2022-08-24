const getImage = async(city, country) => {

    const relevantImage = await fetch(
        `http://localhost:5200/pixaFetch/${city}/${country}`
        )
        .then(res => res.json())
        .then(imgData => {
            
            const fetchedImg = imgData.hits[0].webformatURL
            const bgImage = imgData.hits[0].largeImageURL
            console.log(bgImage);
            const imgFrame = document.getElementById('img-frame')
            const imgEle = document.createElement('img')
            imgFrame.innerHTML = `
                <img src="${fetchedImg}" width="600px" height="600px">
            `
    })
}

export { getImage }