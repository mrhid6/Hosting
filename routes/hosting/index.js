const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render("hosting/index");
})

module.exports = router
