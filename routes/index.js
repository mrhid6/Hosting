const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render("index");
})

router.get('/about', function (req, res) {
    res.send('Learn about us')
})

router.use("/hosting", require("./hosting"));

module.exports = router
