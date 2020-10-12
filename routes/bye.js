/**
 * @description Defines the bye API endpoints.
 * @author dbarenholz
 * @version 1.0.0
 */
const express = require("express");
const router = express.Router();

const ByeController = require("../controllers/hello");

// GET /bye
router.get("/", ByeController.sayBye);

module.exports = router;
