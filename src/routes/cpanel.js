const express = require('express')

router = new express.Router

var userData = {
    title: 'OLC integrator',
    author: 'Milton Pereira'
}

router.get('/cpanel', (req, res) => {
    res.render('index', userData)
})

module.exports = router 