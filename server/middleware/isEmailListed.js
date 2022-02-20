const isEmailListed = (req, res, next) => {
    const {email} = req.body
    const fs = require('fs');
    const path = require('path');

    const userList = fs.readFileSync(
        path.join(process.cwd(),
            'server/db/users.txt'
        ),
        {encoding: 'utf8'}
    )
    const data = userList.trim().split('\n')
        .find(item => JSON.parse(item).email === email)
    if (data) {
        res.redirect('/error_email')
    } else {
        next()
    }
}

module.exports = {isEmailListed}