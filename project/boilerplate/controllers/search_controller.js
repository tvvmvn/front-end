const { User } = require("../models/model");

exports.username = async (req, res, next) => {
  try {
    const username = req.query.username;
    const patt = new RegExp("^" + username);
    const users = await User.find({
      username: {$regex: patt}
    });

    setTimeout(() => {
    }, 1000)
    res.json(users);

  } catch (error) {
    next(error)
  }
}