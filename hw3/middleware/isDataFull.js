const isDataFull = (req, res, next) => {
    const data = req.body;
    for (const key in data) {
        if (!data[key]) {
            return res.render('Login', {error: '!!! All data fields of the form should not be empty'});
        }
    }
    next();
};

module.exports = {isDataFull};