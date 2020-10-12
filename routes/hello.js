/**
 * @description Defines the hello API endpoints.
 * @author dbarenholz
 * @version 1.0.0
 */
const express = require("express");
const router = express.Router();

const HelloController = require("../controllers/hello");

// GET /hello
router.get("/", HelloController.sayHello);

module.exports = router;
