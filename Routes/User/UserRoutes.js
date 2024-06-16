const express = require('express');
const path = require('path');

const { BasicProfileRoutes } = require('./UserRouting/BasicProfileRoutes');
const { ProfessionalProfileRoutes } = require('./UserRouting/ProfessionalProfileRoutes');
const { AcccountSettingsRoutes } = require('./UserRouting/AccountSettingsRoutes');

const router = express.Router();

router.use('/BasicProfile', BasicProfileRoutes);

router.use('/ProffesionalProfile', ProfessionalProfileRoutes);

router.use('/AccountSettings', AcccountSettingsRoutes);

module.exports = {
    UserRoutes: router
};
