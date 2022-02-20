const app = () => {
    const express = require('express');
    const {engine} = require('express-handlebars');
    const path = require('path');
    const hbs = require('hbs');
    hbs.registerPartial('header','header');
    const {
        loginRoute,
        userListRoute,
        userDetailsRoute,
        homeRoute
    } = require('./routes');

    const app = express();
    const port = 5000;

    app.set('views', path.join(__dirname, 'static'));
    app.set('view engine', 'hbs');
    app.engine('hbs', engine({
        layoutsDir: path.join(__dirname, 'static/layouts'),
        defaultLayout: 'main',
        extname: 'hbs'
    }));

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    app.use(loginRoute);
    app.use(userListRoute);
    app.use(userDetailsRoute);
    app.use(homeRoute);
    app.use(
        (req, res) => {
        res.render('Error404')
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
}

module.exports = {app};