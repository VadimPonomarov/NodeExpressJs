const {Router} = require('express');
const loginRoute = Router();

loginRoute.get('/',
    (req, res) => {
        res.render('Login')
    });

module.exports = {loginRoute};