var express = require('express');
var router = express.Router();
const { index, getUsers, getUserById, postUser, putUser, deleteUser } = require('./controller');

router.get('', index);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', postUser);
router.put('/users/:id', putUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
