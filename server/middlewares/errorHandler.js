export default function errorHandler(err, req, res) {
  res.status(err.statusCode || 500).send({
    title: err.name,
    message: err.message
  });
}
