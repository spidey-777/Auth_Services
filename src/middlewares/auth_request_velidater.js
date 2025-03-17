const validateUserAuth  = (req,res,next)=>{
    if(!req.body.email|| !req.body.password){
        return res.status(400).json({
            succuss:false,
            data:{},
            message:`something went wrong `,
            err:`email or password missing `

        })
    }
    next();
}
const validateUserIsAdmin = (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).json({
            success: false,
            err: 'Please provide user ID',
            message: 'Something went wrong'
        });
    }
    next();
};


module.exports = {
    validateUserAuth,
    validateUserIsAdmin 
} 
