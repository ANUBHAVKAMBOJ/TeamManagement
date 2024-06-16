const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/');

router.post('/edit');

module.exports = {
    BasicProfileRoutes: router
};
