const countDownCalculator = (clientDate, clientDestination) => {
    // Define global variables for the countdown calculator function
    const toggler = document.getElementById('countdown-toggler')
    toggler.classList.toggle('hidden')

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const countDownTimer = () => { 
        // Create new date objects and store in variables
        const today = new Date()
        const arrivalDate = new Date(clientDate)
        const remainingTime = document.getElementById('remaining-time')
        
        // Define conditionals to determine time til trip and specify reactive state changes
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
            // Render results to the UI
            remainingTime.innerHTML = `
            <ul>
                <li id="countdown-background"> 
                <h2 id="countdown-to-text">Countdown to ${clientDestination} trip:</h2>
                <span class="countdown-digits">${days}</span> 
                <span class="countdown-quantifiers"> days</span>  
                <span class="countdown-digits">${hours}</span> 
                <span class="countdown-quantifiers"> hrs</span>  
                <span class="countdown-digits">${minutes}</span> 
                <span class="countdown-quantifiers"> mins</span>  
                <span class="countdown-digits">${seconds}</span> 
                <span class="countdown-quantifiers"> secs</span> </span> 
                </li>
            </ul>
            `
        }
    }
    let timerRef = setInterval(countDownTimer, 1000)
}

export { countDownCalculator }