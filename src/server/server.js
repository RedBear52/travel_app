let projectDb = {}

const path = require('path')
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express()
const port = 5200

app.use(cors())
app.use(bodyParser.urlencoded( { extended: false })) //need to confirm extended setting
app.use(bodyParser.json())

app.use('/', express.static('./dist'))

// app.get('/', (req, res)=> {
//     res.send('Howdy')
// })

app.get('/weatherGrab/:place', async (req, res) => {
    const clientPlace = req.params.place
    const geoNameApiKey = process.env.GEONAMES_API_KEY

    

        let translatedWord = await fetch(`
        http://api.geonames.org/searchJSON?q=${clientPlace}&maxRows=10&username=${geoNameApiKey}
        `)
            .then(res => res.json())
            // .then(data => console.log(data))
            res.send(translatedWord)
})

app.listen(port, () => {
    console.log(`server awake and listening on port: ${port}`);
})