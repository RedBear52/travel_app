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
                <u>Current temperature</u>
                ${temp}°f
            `
        })

    const forecast = await fetch(
        `http://localhost:5200/forecastFetch/${lat}/${lon}`
        )
        .then(res => res.json())
        .then(info => {
            const weatherArray = info.data
            const forecastEle = document.getElementById('forecast')
            weatherArray.map(item => {

            const dailyHighTemp = parseInt(item.high_temp)
            const dailyLowTemp = parseInt(item.low_temp)
            const weatherIcon = item.weather.icon
            const weatherDescription = item.weather.description
            const itemDate = item.datetime
            const day = new Date(itemDate)
            const weekDayId = day.getDay()
            const daysOfWeek = [
                'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
            ]
            const weekDay = daysOfWeek[weekDayId]
            const dailyTemps = document.createElement('ul')
            dailyTemps.innerHTML = `
                <li>${itemDate}</li>  
                <li>${weekDay}</li>
                <li>High: ${dailyHighTemp}</li>
                <li>Low: ${dailyLowTemp}</li>
                <li><img src="https://www.weatherbit.io/static/img/icons/${weatherIcon}.png"></li> 
                <li id="btm-weather-cell">${weatherDescription}</li>
            `
            forecastEle.appendChild(dailyTemps)
        })
    })
}

export { getWeatherInfo }
// need to add date functionality