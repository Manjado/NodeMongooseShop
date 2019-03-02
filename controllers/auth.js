const User = require('../models/user');

exports.getLogin = (req, res, next) => {
console.log(req.session.isLoggedIn)
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.session.isLoggedIn
    });
};

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
    User.findById("5c67deb4d4f711368059e06d")
        .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            req.session.save(err => {
                console.log(err);
                res.redirect('/')
            });
        })
        .catch(err=> console.log(err));
};

exports.postSignup = (req, res, next) => {};

exports.postLogout = (req, res, next) => {
   req.session.destroy(err => {
       console.log(err);
      res.redirect('/');
   });
};