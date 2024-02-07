var express = require("express");
var router = express.Router();

// GET /customers
router.get("/", function (req, res) {
    res.send("Customers list");
});

// POST /customers
router.post("/", function (req, res) {
    res.send(req.body);
});

module.exports = router;
