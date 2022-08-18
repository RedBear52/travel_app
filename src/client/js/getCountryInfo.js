const getCountryInfo  = async (country) => {
    const lowCountry = country.toLowerCase()

    const countryDeets = await fetch(
        `http://localhost:5200/countryData/${lowCountry}`
        ).then(res => res.json())

        console.log(countryDeets[0])
        
        const countryInfo = countryDeets[0]
        const flag = countryInfo.flag
        const countryName = countryInfo.name
        const currency = countryInfo.currencies[0].name
        const currencySymbol = countryInfo.currencies[0].symbol
        const language = countryInfo.languages[0].name
        const population = countryInfo.population
        const capital = countryInfo.capital

        const funFactsEle = document.getElementById('fun-facts').innerHTML = `
        <li><h3>Get to know ${countryName}:</h3></li>
        <li><img src="${flag}" width="180px" margin="0" border="1px"></li>
        <li><strong>Capitol city:</strong> ${capital}</li>
        <li><strong>Language:</strong> ${language}</li>
        <li><strong>Currency:</strong> ${currency} (${currencySymbol})</li>
        <li><strong>Population:</strong> ${population}</li>
        <li><strong></strong></li>
    `
}
export { getCountryInfo }