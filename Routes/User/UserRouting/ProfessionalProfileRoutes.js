const express = require('express');

const router = express.Router();

router.get('/');

router.post('/edit');

module.exports = {
    ProfessionalProfileRoutes: router
};
