const fs = require('fs');
const path = require('path');
const app = () => {
    const express = require('express')
    const {engine} = require('express-handlebars')
    const path = require('path')
    const fs = require('fs')
    const hbs = require('hbs')

    const app = express()
    const port = 5000

    app.set('views', path.join(__dirname, 'static'))
    app.set('view engine', 'hbs')
    app.engine('hbs', engine({
        layoutsDir: path.join(__dirname, 'static/layouts'),
        defaultLayout: 'main',
        extname: 'hbs'
    }))
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    app.get('/', (req, res) => {
        res.render('Login')

    })
    app.get('/user_list', (req, res) => {
        const data = []
        const userList = fs.readFileSync(
            path.join(process.cwd(),
                'server/db/users.txt'
            ),
            {encoding: 'utf8'}
        )
        userList.trim().split('\n').forEach(item => data.push(JSON.parse(item)))
        res.render('UserList', {data})
    })

    app.get('/user_list/:email', (req, res) => {
        const userList = fs.readFileSync(
            path.join(process.cwd(),
                'server/db/users.txt'
            ),
            {encoding: 'utf8'}
        )
        const data = userList.trim().split('\n')
            .filter(item => JSON.parse(item).email === req.params.email)
        res.render('UserDetails', {data: JSON.parse(data[0])})
    })

    app.post('/home', (req, res) => {
        const userList = fs.readFileSync(
            path.join(process.cwd(),
                'server/db/users.txt'
            ),
            {encoding: 'utf8'}
        )
        const data = userList.trim().split('\n')
            .find(item => JSON.parse(item).email === req.body.email)
        if (data) {
            return res.redirect('error_email')
        }
        fs.appendFile(path.join(process.cwd(), 'server/db/users.txt'),
            `${JSON.stringify(req.body)}\n`, () => {
                res.redirect('/user_list')
            })
    })
    app.get('/error_email', (req, res) => {
        res.render('ErrorEmail')
    })

    app.use((req, res) => {
        res.render('Error404')
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

module.exports = {app}