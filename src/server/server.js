let projectDb = []

const path = require('path')
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express()
const port = 5200

const geoNameApiKey = process.env.GEONAMES_API_KEY
const weatherBitApiKey = process.env.WEATHERBIT_API_KEY
const pixaBabyApiKey = process.env.PIXABABY_API_KEY

app.use(cors())
app.use(bodyParser.urlencoded( { extended: false })) //need to confirm extended setting
            
app.use(bodyParser.json())

app.use('/', express.static('dist'))


// --------------- POST route --- PUSHes TO DB -----------//
app.post('/post', async (req, res) => {
    let data = req.body
    let newData = {
        'userLocale':data.userLocale,
        'departTime':data.departTime,
        'returnTime':data.returnTime
    }
    
    projectDb.push(newData)
    console.log(projectDb)

    res.send(projectDb)
})


// ---------------------- GET ROUTES --------------------//
app.get('/geoFetch/:place', async (req, res) => {
    try {
        const clientPlace = req.params.place

        let geoPlace = await fetch(`
        http://api.geonames.org/searchJSON?q=${clientPlace}&maxRows=10&isNameRequired=true&username=${geoNameApiKey}
        `)
            .then(res => res.json())
            console.log(geoPlace)

            res.send(geoPlace)
    } catch (err) {
        console.log('Geo Fetch Error:', err)
    }
})

app.get('/weatherFetch/:lat/:lon', async (req, res) => {
    try {
        const lat = req.params.lat
        const lon = req.params.lon
    
        let geoWeather = await fetch(`
         http://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${lon}&units=i&key=${weatherBitApiKey}
        `)
            .then(res => res.json())
            res.send(geoWeather)
    } catch (err) {
        console.log('Weather Fetch Error:', err);
    }
})

app.get('/forecastFetch/:lat/:lon', async (req, res) => {
    try {
        const lat = req.params.lat
        const lon = req.params.lon

        let geoWeather = await fetch(`
        http://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&units=i&days=7&key=${weatherBitApiKey}
        `)
        .then(res => res.json())
        res.send(geoWeather)
    } catch (err) {
        console.log('Forecast Fetch Error:', err);
    }
})

app.get('/pixaFetch/:city/:country', async (req, res) => {
    try {
        const city = req.params.city
        const country = req.params.country

        let placePic = await fetch(`
        https://pixabay.com/api/?key=${pixaBabyApiKey}&q=${city}+${country}&image_type=photo&orientation=horizontal
        `)
        .then(res => res.json())
        res.send(placePic)
    } catch (err) {
        console.log('Pixababy Fetch Error:', err);
    }
})

app.get('/countryData/:country', async (req, res) => {
    try {
        const country = req.params.country

        let countryData = await fetch(`
        https://restcountries.com/v2/name/${country}
        `)
            .then(res => res.json())
            console.log(countryData[0]);
            res.send(countryData)
    } catch (err) {
        console.log('Rest Countries Api Error:', err);
    }
})

app.listen(port, () => {
    console.log(`server awake and listening on port: ${port}`);
})