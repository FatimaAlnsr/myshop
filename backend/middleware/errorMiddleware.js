//if the user enter a url that doesnt exist this error handler will handle it
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

//This error handler doesnt seem to catch anything since iam using try/catch/
//will keep it for a while and see if there is any use to it!
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

exports.notFound = notFound
exports.errorHandler = errorHandler
