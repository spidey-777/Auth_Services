const {response } = require('express');
const UserService  = require('../services/user_services');

const userService = new UserService();

const create=async(req,res)=>{
    try {
        //console.log(req.body);
         const response = await userService.create({
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
const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: "Successfully signed in"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error.message
        });
    }
};
const isAuthenticated = async(req,res)=>{
    try {
        const token = req.header['x-access-token'];
        const response = await userService.isAuthenticated(token);
        res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:"user is authenticated and token is valid"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error.message
        });
    }

}
const isAdmin = async (req, res) => {
    try {
        const response = await userService.isAdmin(req.body.id);  
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched whether user is admin or not",
            err: {}
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error.message
        });
    }
};



module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin
};

    
