const fs = require('fs');
const path = require('path');

const appendDataDB = (data) => {
    fs.appendFileSync(path.join(process.cwd(), 'hw3/db/users.txt'),
        `${JSON.stringify(data)}\n`)
}

const getUserList = () => {
    const userList = fs.readFileSync(
        path.join(process.cwd(),
            'hw3/db/users.txt'
        ),
        {encoding: 'utf8'}
    )
    const data = []
    userList.trim().split('\n').forEach(item => data.push(JSON.parse(item)))
    return data
}

const getUserByEmail = (email) => {
    const userList = getUserList()
    return userList.find(item => item.email === email)
}

module.exports = {appendDataDB, getUserList, getUserByEmail}