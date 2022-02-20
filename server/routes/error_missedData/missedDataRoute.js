const {Router} = require('express')
const errorMissedDataRoute = Router()

errorMissedDataRoute.get('/error_data', (req, res) => {
    res.render('Login',
        {
            error: 'There are some data missed. Check it all, please !',
            data: req.body
        }
    )
})

module.exports = {errorMissedDataRoute}