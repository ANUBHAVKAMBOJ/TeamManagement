const BlowFish = require('blowfish-js');

const { CIPHER_KEY } = require('../../config');

const BFcrypt = new BlowFish(CIPHER_KEY);

const cipher = async (text) => {
    try{
        const cipheredText = await BFcrypt.encrypt(text).toString();
        return cipheredText;
    }
    catch(err){
        console.log(`An error occured while encrypting the value: ${text}`);
        console.log(err);
    }
};

const decipher = async (cipheredText) => {
    try{
        const decipheredText = await BFcrypt.decrypt(cipheredText).toString();
        return decipherText;
    }
    catch(err){
        console.log('An error occured while decrypting the value');
        console.log(err);
    }
}

async function check(text, cipheredText){
    try{
        const decipheredText = decipher(cipheredText);
        return (text === decipheredText);
    }
    catch(err){
        console.log(`An error occured on validating text: ${text}`);
        console.log(err);

        return false;
    }
};

module.exports = {
    cipher,
    decipher,
    check
};
