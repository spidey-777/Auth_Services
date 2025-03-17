const { User,Role } = require('../models/index');


class UserRepository {

    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in repo layer ");
            throw error;
        }
        
    }
    async destroy(userId){
        try {
             await User.destroy({
                where:{
                    id:userId
                }
             });
            return true;
        } catch (error) {
            console.log("something went wrong in repo layer ");
            throw error;
        }
    }
    async getById(userId){
        try {
            const user = await User.findByPk(userId,{
                attributes:['email','id']
            })
            return user;
        } catch (error) {
            console.log("something went wrong in repo layer ");
            throw error;
        }
    }
    async getByEmail(userEmail) {
        try {
            return await User.findOne({ where: { email: userEmail } });
        } catch (error) {
            console.error("Something went wrong in repo layer");
            throw error;
        }
    }
    async isAdmin(userId){
        try {
            const user = await User.findByPk(userId);  
            if (!user) {
                throw new Error("User not found");
            }
    
            const adminRole = await Role.findOne({
                 where: { name: 'ADMIN' }
            });
    
            if (!adminRole) {
                throw new Error("Admin role not found");
            }
    
            return await user.hasRole(adminRole); 
        } catch (error) {
            console.error("Something went wrong in repo layer", error);
            throw error;
        }
    }
    
}


module.exports = UserRepository;