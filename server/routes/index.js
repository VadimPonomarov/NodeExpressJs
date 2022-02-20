const {loginRoute} = require('./login/loginRoute')
const {userListRoute} = require('./user_list/userListRoute')
const {userDetailsRoute} = require('./user_details/userDetailsRoute')
const {homeRoute} = require('./home/homeRoute')
const {errorEmailRoute} = require('./error_email/errorEmail')

module.exports = {loginRoute, userListRoute, userDetailsRoute, homeRoute, errorEmailRoute}