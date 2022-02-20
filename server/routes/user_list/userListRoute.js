const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const userListRoute = Router()

userListRoute.get('/user_list', (req, res) => {
    const userList = fs.readFileSync(
        path.join(process.cwd(),
            'server/db/users.txt'
        ),
        {encoding: 'utf8'}
    )
    const data = []
    userList.trim().split('\n').forEach(item => data.push(JSON.parse(item)))
    res.render('UserList', {data})
})

module.exports = {userListRoute}