const tripLength = (departDate, returnDate) => {
    const tripRangeEle = document.getElementById('trip-length-header')
    const departDateNumber = new Date(departDate)
    const returnDateNumber = new Date(returnDate)
    const tripDayCount = returnDateNumber.getTime() - departDateNumber.getTime();
    const tripDayUnits = tripDayCount/(1000 * 3600 * 24)
    const tripStart = document.getElementById('trip-start')
    const tripEnd = document.getElementById('trip-end')

    tripRangeEle.innerHTML = `
        Trip length: ${tripDayUnits} days 
    `

    tripStart.innerHTML = `
     departure date: ${departDate}
    `

    tripEnd.innerHTML = `
     return date: ${returnDate}
    `
}

export { tripLength }