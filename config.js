const dotenv = require('dotenv');
const CryptoJS = require('crypto-js');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    CIPHER_ALGO: CryptoJS.AES,
    CIPHER_KEY: process.env.CIPHER_KEY,
    USER_KEY_GENERATOR_KEY: process.env.USER_KEY_GENERATOR_KEY,
    USER_TOKEN_GENERATOR_KEY: process.env.USER_TOKEN_GENERATOR_KEY
};

