var express = require("express");
var router = express.Router();

// GET /customers
router.get("/", function (req, res) {
    res.send("Customers list");
});

module.exports = router;
