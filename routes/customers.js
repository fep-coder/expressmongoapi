var express = require("express");
var router = express.Router();
const Customer = require("../models/customer");

// GET /customers
router.get("/", function (req, res) {
    res.send("Customers list");
});

// POST /customers
router.post("/", async function (req, res) {
    try {
        const newCustomer = await Customer.create(req.body);

        res.status(201).json({
            status: "success",
            data: { customer: newCustomer },
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            data: { error },
        });
    }
});

module.exports = router;
