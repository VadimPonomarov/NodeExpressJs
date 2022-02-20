const isDataFull = (req, res, next) => {
    const data = req.body
    for (const key in data) {
        if (!data[key]) {
            return res.redirect('/error_data')
        }
    }
    next()
}

module.exports = {isDataFull}