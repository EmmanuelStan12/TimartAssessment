const crypto = require('crypto')

const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}

const hashPassword = (password) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha256')
        .toString('hex');
    return [salt, hashedPassword];
}

module.exports = {
    validatePassword,
    hashPassword
}