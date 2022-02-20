const {Router} = require('express')
const errorEmailRoute = Router()

errorEmailRoute.get('/error_email', (req, res) => {
    res.render('ErrorEmail')
})


module.exports = {errorEmailRoute}

