const UserRepository  = require('../repository/user_repository');
const jwt = require('jsonwebtoken');
const bcrypt= require('bcrypt')
const {JWT_KEY} = require('../config/serverconfig')


class UserServices{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(`something went wrong in service layer `);
            throw error;
        }
    }
    async signIn(email, plainPassword) {
        try {
            const user = await this.userRepository.getByEmail(email);
            const passwordMatch = await this.checkPassword(plainPassword, user.password);
            if (!passwordMatch) {
                console.log("Password doesn't match");
                throw new Error("Invalid credentials");
            }

            const newJwt = this.createToken({ email: user.email, id: user.id });
            return newJwt;

        } catch (error) {
            console.error("Something went wrong in signIn:", error.message);
            throw error;
        }
    }
    async isAuthenticated(token){
        try {
            const response = this.verifyTokan(token);
            if(!response){
                throw {error:`invalid token`}
            }
            const user = this.userRepository.getById(response.id);
            if(!user){
                throw {error:"no user found"};
            }
            return user.id;
        } catch (error) {
            console.log("something went wrong in isauthentication ")
        }
    }
    createToken(user) {
        try {
            return jwt.sign(user, JWT_KEY, { expiresIn: '1h' });
        } catch (error) {
            console.error("Something went wrong in token creation");
            throw error;
        }
    }
    verifyTokan(tokan){
        try {
            const response = jwt.verify(tokan, JWT_KEY);
        } catch (error) {
            console.log('something went wrong in verifing tokan');
            throw error;
        }
    }
    async checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return await bcrypt.compare(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.error("Something went wrong in password comparison");
            throw error;
        }
    }
    async isAdmin(userId){
        try {
            return await this.userRepository.isAdmin(userId);
            
        } catch (error) {
            console.error("Something went wrong in service layer");
            throw error;
        }

    }
}

module.exports = UserServices;