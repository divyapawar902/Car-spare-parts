const bcrypt = require('bcrypt');

 const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashPass = await bcrypt.hash(password, saltRounds);
        return hashPass;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
};


const comparePasswords = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};

module.exports = {
    hashPassword,
    comparePasswords
};
