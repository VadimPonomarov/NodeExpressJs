const {Router} = require('express');
const {isEmailListed} = require('../../middleware/isEmailListed');
const {isDataFull} = require('../../middleware/isDataFull');
const homeRoute = Router();
const {appendDataDB} = require('../../services/services');

homeRoute.post('/home', isEmailListed, isDataFull,
    (req, res) => {
        appendDataDB(req.body);
        res.redirect('/user_list');
    });

module.exports = {homeRoute};