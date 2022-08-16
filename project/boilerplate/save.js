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

