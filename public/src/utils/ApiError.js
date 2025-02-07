class ApiError extends Error {
    constructor(
        statusCode,
        message =  "Somthing went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.sucess = false;
        this.error = errors

        if(statck){
            this.stack = statck
        }else{
            Error.captureSytackTrace(this. this.constructor)
        }
        
    }
}

export {ApiError}