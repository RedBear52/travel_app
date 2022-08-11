const path = require('path')
const dotenv = require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express')

const app = express()
const port = 5200

app.use(cors())
app.use(bodyParser.urlencoded( { extended: false }))
app.use(bodyParser.json())

app.use('/', express.static('src/client/views'))

app.get('/:word', async (req, res) => {
    const clientWord = req.params.word
    // res.send(`¿Como se dice "${clientWord}" en espanol?`)
    const apiKey = process.env.SPANGLISH_API_KEY
    
        let translatedWord = await fetch(`https://www.dictionaryapi.com/api/v3/references/spanish/json/${clientWord}?key=${apiKey}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            res.send(translatedWord)
})

app.listen(port, () => {
    console.log(`server awake and listening on port: ${port}`);
})