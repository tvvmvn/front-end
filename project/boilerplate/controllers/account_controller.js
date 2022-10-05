const { User } = require("../models/model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const formidable = require("formidable");

exports.login = async (req, res, next) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (!user) {
      const err = new Error("User not found");
      err.status = 401;
      return next(err);
    }

    const hashedPassword = crypto.pbkdf2Sync(password, user.salt, 310000, 32, "sha256")
    .toString("hex")
    
    if (user.password !== hashedPassword) {
      const err = new Error("Password not match");
      err.status = 401;
      return next(err);
    }

    const token = jwt.sign({ username: user.username }, "shhhhh");

    setTimeout(() => {
      res.json({ user, token })
    }, 1000)

  } catch (error) {
    next(error)
  }
}

exports.register = [
  async (req, res, next) => {
    try {
      const { username, password, email } = req.body;
  
      if (!username) {
        const err = new Error("username is required");
        err.status = 400;
        return next(err);
      }
  
      // next callback
      next();

    } catch (error) {
      next(error)
    }
  },

  async (req, res, next) => {
    try {
      res.json(req.body)
      return;

      const salt = crypto.randomBytes(16).toString("hex");
      const hashedPassword = crypto.pbkdf2Sync(password, salt, 310000, 32, "sha256")
      .toString("hex")

      const user = new User({
        username,
        email,
        password: hashedPassword,
        salt: salt
      })

      await user.save();

      setTimeout(() => {
        res.json(user)
      }, 1000)

    } catch (error) {
      next(error)
    }
}]

exports.edit = async (req, res, next) => {
  try {    
    const loginUser = req.user;
    const user = await User.findById(loginUser._id);
    const bio = req.body.bio;
  
    user.bio = bio;
    await user.save();
  
    setTimeout(() => {
      res.json(user.bio)
    }, 1000)

  } catch (error) {
    next(error)
  }
}

exports.upload_image = async (req, res, next) => {
  const form = formidable({});
  
  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        return next(err);
      }

      const loginUser = req.user;
      const user = await User.findById(loginUser._id);
      const image = files.image;

      const oldPath = image.filepath;
      const ext = image.originalFilename.split(".")[1];
      const newName = image.newFilename + "." + ext;
      const newPath = __dirname + "/data/users/" + newName;

      fs.renameSync(oldPath, newPath);

      user.image = newName;
      await user.save();
      
      setTimeout(() => {
        res.json(newName);
      }, 1000)

    } catch (error) {
      next(error)
    }
  })
}

exports.delete_image = async (req, res, next) => {
  try {
    const loginUser = req.user;
    const user = await User.findById(loginUser._id);

    user.image = null;
    await user.save();

    setTimeout(() => {
      res.end();
    }, 1000)

  } catch (error) {
    next(error)
  }
}