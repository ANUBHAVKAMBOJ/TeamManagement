const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProfessionalProfileSchema = new mongoose.Schema({
    ProfessionID: {
        type: Number,
        unique: true
    },
    UserID: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true,
        lowercase: true
    },
    TeamID: {
        type: String,
        required: true
    },
    TeamName: {
        type: String,
        required: true,
        uppercase: true
    },
    Designation: {
        type: String,
        required: true
    },
    StartDate: {
        type: Date,
        default: Date.now
    },
    EndDate: {
        type: Date
    },
    Salary: {
        type: Number,
        min: 0
    },
    Details: {
        type: String
    }
});

ProfessionalProfileSchema.plugin(AutoIncrement, { inc_field: 'ProfessionID' });

const ProfileModel = mongoose.Model('ProfessionalProfileDetails', ProfessionalProfileSchema);

module.exports = {
    ProfessionalProfileModel: ProfileModel
};

