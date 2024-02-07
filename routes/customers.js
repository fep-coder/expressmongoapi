var express = require("express");
var router = express.Router();
const Customer = require("../models/customer");

// GET /customers
router.get("/", async function (req, res) {
    try {
        const customers = await Customer.find()

        res.status(200).json({
            status: "success",
            data: { customers },
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            data: { error },
        });
    }
});

// GET /customers/:id
router.get("/:id", async function (req, res) {
    try {
        const customer = await Customer.findById(req.params.id)

        res.status(200).json({
            status: "success",
            data: { customer },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            data: { error },
        });
    }
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
