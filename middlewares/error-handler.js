const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    message: 'Some error occured',
    errorMessage: error.message,
  });
};

module.exports = errorHandler;
