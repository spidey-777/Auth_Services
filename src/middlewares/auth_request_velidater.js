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
 

module.exports= {
    validateUserAuth
}