const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const userDetailsRoute = Router()

userDetailsRoute.get('/user_list/:email', (req, res) => {
    const userList = fs.readFileSync(
        path.join(process.cwd(),
            'server/db/users.txt'
        ),
        {encoding: 'utf8'}
    )
    const data = userList.trim().split('\n')
        .find(item => JSON.parse(item).email == req.params.email)
    res.render('UserDetails', {data: JSON.parse(data)})
})


module.exports = {userDetailsRoute}