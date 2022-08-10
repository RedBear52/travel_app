const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express')

const app = express()
const port = 5200

app.use(cors())
app.use(bodyParser.urlencoded( { extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Howdy Multiverse!')
})

app.post('/:name', (req, res) => {
    const userName = req.params.name
   console.log(userName);
})

app.listen(port, () => {
    console.log(`server awake and listening on port: ${port}`);
})