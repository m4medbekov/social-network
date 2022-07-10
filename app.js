const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Backend')
})

app.get('/map', (req, res) => {
    res.send('Map')
})

app.listen(port, () => {
    console.log(`Sever is running on port ${port}`)
})