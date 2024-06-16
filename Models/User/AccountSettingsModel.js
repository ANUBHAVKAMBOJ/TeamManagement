const mongoose = require('mongoose');

const AccountSettingsSchema = new mongoose.Schema({
    UserID: {
        type: Number,
        required: true,
        unique: true
    },
    IsPublic: {
        type: Boolean,
        default: true
    },
    ShowFriends: {
        type: Boolean,
        default: true
    },
    ShowSalary: {
        type: Boolean,
        default: true
    }
});

const SettingsModel = mongoose.Model('AccountSettingsDetails', AccountSettingsSchema);

module.exports = {
    AccountSettingsModel: SettingsModel
};
