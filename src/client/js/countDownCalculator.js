const countDownCalculator = (clientDate, clientDestination) => {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const countDownTimer = () => { 
        const today = new Date()
        const arrivalDate = new Date(clientDate)
        const remainingTime = document.getElementById('remaining-time')
        const timeRange = arrivalDate - today
        if (timeRange <= -day) {
            remainingTime.innerHTML = 'How was your trip?'
            clearInterval(timerRef)
            return
        } else if (timeRange <= 0) {
            remainingTime.innerHTML = 'Adventure awaits!'
            clearInterval(timerRef)
            return
        } else {
            const days = Math.floor(timeRange / day)
            const hours = Math.floor((timeRange % day) / hour)
            const minutes = Math.floor((timeRange % hour) / minute)
            const seconds = Math.floor((timeRange % minute) / second)

            remainingTime.innerHTML = `
            <ul>
                <li id="countdown-background"> 
                <h2>Countdown to ${clientDestination} trip:</h2>
                <span class="countdown-digits">${days} days  ${hours} hrs  ${minutes} mins  ${seconds} secs </span> 
                </li>
            </ul>
            `
        }
    }
    let timerRef = setInterval(countDownTimer, 1000)
}

export { countDownCalculator }