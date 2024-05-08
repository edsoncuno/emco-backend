const express = require('express');
const itemRouter = require('./item');

const router = express.Router();

router.use('/items', itemRouter);

module.exports = router;