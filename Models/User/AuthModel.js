const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const { cipher , decipher , check } = require('./UserModelFunctions');

const AuthSchema = new mongoose.Schema({
    UserID: {
        type: Number,
        unique: true
    },
    UserKey: {
        type: String,
        required: true,
        unique: true
    },
    UserToken: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    Password: {
        type: String,
        required: true
    }
});

AuthSchema.plugin(AutoIncrement, { inc_field: 'UserID' });

const Encipherement = (obj) => {
    obj.Email = cipher(obj.Email);
    obj.Password = cipher(obj.Password);
    obj.UserKey = cipher(obj.UserKey);
    obj.UserToken = cipher(obj.UserToken);
};

const Decipherement = (obj) => {
    obj.Email = decipher(obj.Email);
    obj.Password = decipher(obj.Password);
    obj.UserKey = decipher(obj.UserKey);
    obj.UserToken = decipher(obj.UserToken);
}

AuthSchema.pre('save', (next) => {
    Encipherement(this);
    next();
});

AuthSchema.pre('updateOne', (next) => {
    Encipherement(this);
    next();
});

AuthSchema.post('findOne', (doc, next) => {
    Decipherement(doc);
    next();
});

AuthSchema.methods.validate = check;

const AuthModel = mongoose.Model('AuthDetails', AuthSchema);

module.exports = {
    AuthModel
};
