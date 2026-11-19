const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/Path1', (req, res) => res.send('GET Path1'))
app.get('/Path2', (req, res) => res.send('GET Path2:'+Date()))
app.put('/Path1', (req, res) => res.send('PUT Path1'))


app.get('/', (req, res) => res.send('Hello World!!!!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))