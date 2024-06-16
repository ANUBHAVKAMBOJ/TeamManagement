const express = require('express');

const router = express.Router();

router.get('/');

router.post('/edit');

router.post('/edit/ProfileType');

router.post('/edit/Password');

module.exports = {
    AccountSettingsRoutes: router
};
