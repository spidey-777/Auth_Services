const {  StatusCodes } = require('http-status-codes');
class AppError extends Error{

    constructor(
        name = "AppError",
        message = 'Something went wrong ',
        explanation = 'Something went wrong ',
        StatusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ){
        this.message = message,
        this.name = name,
        this.explanation = explanation,
        this.StatusCode = StatusCode
    }
}


module.exports =AppError;