const getWeatherInfo = async (lat, lon) => {
    
    const currentWeather = await fetch(
        `http://localhost:5200/weatherFetch/${lat}/${lon}`
        )
        .then(res => res.json())
        .then(info => {
            const temp = parseInt(info.data[0].temp)
            const city = info.data[0].city_name
            
            const curTempEle = document.getElementById('locale')
            curTempEle.innerHTML = `
                Current temperature in ${city} : ${temp}
            `
        })

    const forecast = await fetch(
        `http://localhost:5200/forecastFetch/${lat}/${lon}`
        )
        .then(res => res.json())
        .then(info => {
            console.log(info)
            const day1MaxTemp = parseInt(info.data[0].max_temp)
            const day1MinTemp = parseInt(info.data[0].min_temp)
            const weatherIcon = info.data[0].weather.icon
            const weatherDescription = info.data[0].weather.description
            
            const minMaxTemp = document.getElementById('day-1')
            minMaxTemp.innerHTML = `
                Today's high: ${day1MaxTemp}
                <br>
                Today's low: ${day1MinTemp}
                <br>
                ${weatherDescription}
            `
        })
}

export { getWeatherInfo }
// need to add date functionality