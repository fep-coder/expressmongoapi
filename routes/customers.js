var express = require("express");
var router = express.Router();
const Customer = require("../models/customer");

// GET /customers
router.get("/", async function (req, res) {
    try {
        const customers = await Customer.find();

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
        const customer = await Customer.findById(req.params.id);

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

// PATCH /customers/:id
router.patch("/:id", async function (req, res) {
    try {
        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

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

// DELETE /customers/:id
router.delete("/:id", async function (req, res) {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            data: null,
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
