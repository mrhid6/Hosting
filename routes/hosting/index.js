const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render("hosting/index",{
        pagename: "hosting"
    });
})

module.exports = router
