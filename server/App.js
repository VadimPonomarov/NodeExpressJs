const app = () => {
    const express = require('express')
    const path = require('path')
    const hbs = require('hbs')

    const app = express()
    const port = 5000

    app.set('views', path.join(__dirname, 'static'))
    app.set('view engine', 'hbs')

    app.get('/', (req, res) => {
        res.render('Login')
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

module.exports = {app}