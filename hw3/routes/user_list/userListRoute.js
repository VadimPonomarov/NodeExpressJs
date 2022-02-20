const {Router} = require('express')
const {getUserList} = require('../../services/services');
const userListRoute = Router()

userListRoute.get('/user_list',
    (req, res) => {
        res.render('UserList', {data: getUserList()})
    })

module.exports = {userListRoute}