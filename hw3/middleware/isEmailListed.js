const isEmailListed = (req, res, next) => {
    const {email} = req.body;
    const fs = require('fs');
    const path = require('path');

    const userList = fs.readFileSync(
        path.join(process.cwd(),
            'hw3/db/users.txt'
        ),
        {encoding: 'utf8'}
    );
    const data = userList.trim().split('\n')
        .find(item => JSON.parse(item).email === email);
    if (data) {
        res.render('Login', {error: 'Email is already exist'});
    } else {
        next();
    }
};

module.exports = {isEmailListed};