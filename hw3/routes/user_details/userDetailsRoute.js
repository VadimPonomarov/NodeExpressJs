const {Router} = require('express');
const {getUserByEmail} = require('../../services/services');
const userDetailsRoute = Router();

userDetailsRoute.get('/user_list/:email',
    (req, res) => {
        res.render('UserDetails', {data: getUserByEmail(req.params.email)});
    });


module.exports = {userDetailsRoute};