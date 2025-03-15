const UserRepository  = require('../repository/user_repository');


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
}

module.exports = UserServices;