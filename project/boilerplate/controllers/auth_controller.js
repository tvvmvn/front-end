exports.auth = async (req, res, next) => {
  try {
    setTimeout(() => {
      res.json(req.user);
    }, 1000)

  } catch (error) {
    next(error)
  }
}


