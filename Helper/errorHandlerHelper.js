class errorHandlerHelper extends Error{
    constructor(message,statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 404 && statusCode < 500? 'Something went wrong.' : 'server side error';
        this.success = false;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = errorHandlerHelper