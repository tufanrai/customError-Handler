exports.errorMiddleware = (err,req,res,next) =>{
    res.json(err)
    const statuscode = err.statusCode || 500
    const message = err.message || 'faile'
    res.status(statuscode).json({
        status: err.status?? 'error',
        success: err.success?? false,
        message
    })
}