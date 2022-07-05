export const errorHandler = (err, req, res, next) => {
  console.log(err)
  if (err.type === "missing_required_fields") {
    return res.status(422).send({
      message: err.message,
    });
  }

  if (err.type === "invalid_credentials") {
    return res.status(401).send({
      message: err.message,
    });
  }

  if (err.type === "not_found") {
    return res.status(404).send({
      message: err.message,
    });
  }

  if (err.type === "conflict") {
    return res.status(409).send({
      message: err.message,
    });
  }
  
  return res.status(500).send({
    message: "Something went wrong",
  });
}