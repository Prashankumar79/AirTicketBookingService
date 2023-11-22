const {StatusCodes} = require('http-status-codes');

class ServiceError extends Error{
    constructor(
        message ,
        explanation,
        StatusCode=StatusCodes.INTERNAL_SERVER_ERROR
    ){
        super();
        this.name = 'ServiceError';
        this.message = message;
        this.explanation = explanation;
        this.StatusCode = StatusCode
       
    }
}
module.exports = ServiceError;