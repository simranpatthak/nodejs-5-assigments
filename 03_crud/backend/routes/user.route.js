const express = require("express");
const { register, login } = require("../controllers/user.controller");
const router = express()

router.post('/signup', register);
router.post('/login', login);
module.exports = router