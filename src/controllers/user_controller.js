const {response } = require('express');
const UserService  = require('../services/user_services');

const userSerevice = new UserService();

const create=async(req,res)=>{
    try {
        //console.log(req.body);
         const response = await userSerevice.create({
            email:req.body.email,
            password: req.body.password
         })
         return res.status(201).json({
            succuss:true,
            message:`succussfully created new user `,
            data:response,
            err:{}
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:`something went wrong`,
            data:{},
            succuss:false,
            err:error
        })
    }
}

module.exports = {
    create

}
    
