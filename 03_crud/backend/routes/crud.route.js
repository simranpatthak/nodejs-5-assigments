const express = require("express");
const { deleteUser, updateUserDetails, getUserDetails, getAllUsers } = require("../controllers/crud.controller");
const { authenticateToken } = require("../middlewares/permission");
const router = express()

router.get('/users', authenticateToken, getAllUsers);

router.get('/users/:id', authenticateToken, getUserDetails);

router.patch('/users/:id', authenticateToken, updateUserDetails);

router.delete('/users/:id', authenticateToken , deleteUser);




module.exports = router