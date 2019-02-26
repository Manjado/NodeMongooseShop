const User = require('../models/user');

exports.getLogin = (req, res, next) => {
console.log(req.session.isLoggedIn)
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.session.isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    User.findById("5c67deb4d4f711368059e06d")
        .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            res.redirect('/')
        })
        .catch(err=> console.log(err));

};