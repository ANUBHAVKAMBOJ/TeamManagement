const mongoose = require('mongoose');

const FriendsSchema = new mongoose.Schema({
    UserID: {
        type: Number,
        required: true,
        unique: true
    },
    Friends: [{ id: Number }]
});

const FriendsModel = mongoose.Model('FriendsDetails', FriendsSchema);

module.exports = {
    FriendsModel
};
