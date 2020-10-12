/**
 * @description Defines numbers API endpoints.
 * @author dbarenholz
 * @version 1.0.0
 */
const express = require("express");
const router = express.Router();

const NumbersController = require("../controllers/numbers");

// GET /numbers
router.get("/", NumbersController.showOverview);

module.exports = router;
