const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateSingleUser,
  deleteSinglueUser,
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateSingleUser).delete(deleteSingleUser);

module.exports = router;
