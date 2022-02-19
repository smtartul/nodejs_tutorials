const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('ANA SAYFA')
})
app.get('/about', (req, res) => {
    res.status(200).send('HAKKINDA SAYFASI')
})
app.get('/contact', (req, res) => {
    res.status(200).send('ILETISIM SAYFASI')
})

app.get('*', (req, res) => {
    res.status(404).send('SAYFA BULUNAMADI')
})

const port = 4000
app.listen(port, () => {
    console.log(`Sunucu port ${port} üzerinde çalışmaya basladı`);
})