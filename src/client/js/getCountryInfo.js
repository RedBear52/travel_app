const getCountryInfo  = async (country) => {
    try {
        const countryDeets = await fetch(
            `http://localhost:5200/countryData/${country}`
            ).then(res => res.json())
           
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
                <li><img id="flag" src="${flag}" margin="0" border="1px"></li>
                <li><strong>Capitol city:</strong> ${capital}</li>
                <li><strong>Language:</strong> ${language}</li>
                <li><strong>Currency:</strong> ${currency} (${currencySymbol})</li>
                <li><strong>Population:</strong> ${population}</li>
                `
          
        } catch (err) {
            console.log('Error in Country Info module:', err)
            const factsFrame = document.getElementById('facts-frame')
                    factsFrame.innerHTML = `
                        <div id="facts-error-message">
                        <h2>There was a problem fetching info for this location.
                        Consider refining your search terms and trying again.</h2>
                        </div>
                    `
        }
}

export { getCountryInfo }