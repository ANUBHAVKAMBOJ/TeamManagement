const mongoose = require('mongoose');

const BasicProfileSchema = new mongoose.Schema({
    UserID: {
        type: Number,
        required: true,
        unique: true
    },
    UserName: {
        type: String,
        required: true,
        lowercase: true
    },
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        min: 18,
        max: 100
    },
    MobNo: {
        type: String,
        minLength: 12,
        maxLength: 14
    },
    Country: {
        type: String
    },
    City: {
        type: String
    }
});

const ProfileModel = mongoose.Model('BasicProfileDetails', ProfileSchema);

module.exports = {
    BasicProfileModel: ProfileModel
};
