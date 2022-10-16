app.get('/v1', 
  // Sanitization using normalizeEmail()
  body('email').isEmail().normalizeEmail(),  // foo+bar@gmail becomes foo@gmail.com
  body('password').isLength({ min: 5 }),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      res.json({ result: req.body })
    } catch (err) {
      console.error(err)
    }
  }
)

app.get('/v2', 
  body('email').custom(value => {
    return User.findOne({ email: value }).then(user => {
      if (user) {
        return Promise.reject('E-mail already in use')
      }
    })
  }),
  // Error message levels in Validator Level.
  body('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long'), 
  // Error message levels in Custom Validator Level.
  body('passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password')
    }
    return true;
  }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      res.json({ message: req.body })
    } catch (err) {
      console.error(err)
    }
  }
)

app.get('/v3', 
  body('email').isEmail().withMessage({ // provice an object with multiple properties not just simple string.
    message: 'Not an email',
    errorcode: 1
  }),
  // Error message levels in Field Level. check(field, withMessage) and .withMessage() work the same.
  check('password', 'The password must be 5+ chars long and contain a number') // check(field, withMessage as Field Level)
  .not()
  .isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password') // message in Validator Level
  .isLength({ min: 5 }) // message as Field Level
  .matches(/\d/),  // message as Field Level again if it's needed
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      res.send({ message: req.body })
    } catch (err) {
      console.error(err)
    }
  }
)

app.get('/v4', 
  check('addresses.*.postalCode').isPostalCode(), // * means array
  check('addresses.*.number').toInt(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      res.send({ message: req.body })
    } catch (err) {
      console.error(err)
    }
  }
)

app.get('/v5', 
  checkSchema({ // Schemas are a special, <object based> way of defining validations or sanitizations on request.
    id: {},
    myCustomField: {},
    password: {
      isLength: {
        errorMessage: 'Password should be at least 7 char long.',
        options: { min: 7 }
      }
    },
    firstName: {},
    email: {},
    someField: {}
  }), 
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      res.send({ message: req.body })
    } catch (err) {
      console.error(err)
    }
  }
)

// Sign up
app.post("/users", async (req, res, next) => {
  try {
    const {username, password, email} = req.body;

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

    const jwt = new Token({
      user: user._id,
      token: crypto.randomBytes(32).toString("hex")
    })

    await jwt.save();

    const link = `http://localhost:3001/users/${user._id}/${jwt.token}`

    sendEmail(email, link)
    res.json({ message: "We send an email for verification." })

  } catch (error) {
    next(error)
  }
})

app.get("/users/:userId/:token", async (req, res, next) => {
  try {
    const {userId, token} = req.params;

    const user = await User.findById(userId);
    const signupToken = await Token.findOne({ token });

    if (!user) {
      const err = new Error("User not found");
      err.status = 401;
      return next(err)
    }

    if (!signupToken) {
      const err = new Error("Wrong or expired token.");
      err.status = 400;
      return next(err);
    }

    user.active = true;

    await user.save();

    await signupToken.delete();

    const loginToken = jwt.sign({ username: user.username }, "shhhhh");
    res.json({ message: "Signup completed", token: loginToken });

  } catch (error) {
    next(error)
  }
})

// OAuth
app.get("/auth/google", 
  passport.authenticate("google", { scope: ["profile"] })
);

app.get("/auth/google/callback", 
  passport.authenticate("google", { 
    session: false, 
    failureRedirect: "/login" 
  }),
  (req, res, next) => {
    try {
      const token = jwt.sign({ username: req.user.username }, "shhhhh")
      res.json({ message: "login success", token: token })
    } catch (error) {
      next(error)
    }
  }
);

// Signup validation
app.get("/validate/username", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.query.value, active: true })
    
    setTimeout(() => {
      res.json(user)
    }, 1000)

  } catch (error) {
    next(error)
  }
})

app.get("/validate/email", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.query.value, active: true })
    
    setTimeout(() => {
    }, 1000)
    res.json(user)
  } catch (error) {
    next(error)
  }
})


app.put("/articles/:id", auth, async (req, res, next) => {
  try {
    const loginUser = req.user;
    const id = req.params.id;
    const description = req.body.description;
    const article = await Article.findById(id);

    if (article.user.toString() !== loginUser._id.toString()) {
      const err = new Error("User not match")
      err.status = 400;
      return next(err)
    }
        
    article.description = description;
    article.updated = Date.now();

    await article.save();

    setTimeout(() => {
      res.json({ article });
    }, 1000)

  } catch (error) {
    next(error)
  }
})

const tokenSchema = new Schema({
  user: { type: String },
  token: { type: String },
  created: { type: Date, default: Date.now, expires: 3600 },
})
exports.Token = mongoose.model('Token', tokenSchema)