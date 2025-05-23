function logErrors(err, req, res, next) {
  console.error(err)
  next(err)
}

function errorHandler(err, req, res, next) {//debe tener todos los parametros para que express reconozcca que es un middleware
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {//debe tener todos los parametros para que express reconozcca que es un middleware
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }

}

module.exports = { logErrors, errorHandler, boomErrorHandler }
