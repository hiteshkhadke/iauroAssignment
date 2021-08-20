const express = require('express');
const UsersController = require('./users.controller');

const router = express.Router();

router.post('/create_user', UsersController.createUser);
router.post('/signIn_user', UsersController.singInUser);
router.put('/update_user', UsersController.updateUser);
router.put('/delete_user', UsersController.deleteUser);

module.exports = router;