const express = require('express');
const router = express.Router();

const {
  categoryById,
  read,
  list
} = require('../controllers/category');
const { userById } = require('../controllers/user');

router.get('/category/:categoryId', read);
router.get('/categories', list);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
