const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const {isEmailListed} = require('../../middleware/isEmailListed');
const {isDataFull} = require('../../middleware/isDataFull');
const homeRoute = Router()

homeRoute.post('/home', isEmailListed, isDataFull, (req, res) => {
    try {
        fs.appendFileSync(path.join(process.cwd(), 'server/db/users.txt'),
            `${JSON.stringify(req.body)}\n`)
        res.redirect('/user_list')
    } catch (e) {
        throw e
    }
})

module.exports = {homeRoute}