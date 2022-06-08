// Sign up
app.post('/validate', async (req, res, next) => {
  try {
    const newUser = req.body;
    console.log(newUser);

    const username = await User.findOne({ username: newUser.username, active: true })
    const email = await User.findOne({ email: newUser.email, active: true })

    const validation = {
      username: { pass: false, message: null },
      email: { pass: false, message: null },
      password: { pass: false, message: null },
      passwordConfirm: { pass: false, message: null }
    }

    if (newUser.username !== undefined) {
      if (newUser.username === '') {
        validation.username.message = 'empty not allowed'
      } else if (username) {
        validation.username.message = 'username must be unique'
      } else if (newUser.username.match(/[a-z]{6,}/) === null) {
        validation.username.message = 'lowercase alphabet only over 6 letters.'
      } else {
        validation.username.pass = true
        validation.username.message = 'Awesome name!'
      }
    }

    if (newUser.email !== undefined) {
      if (newUser.email === '') {
        validation.email.message = 'empty not allowed'
      } else if (email) {
        validation.email.message = 'email must be unique'
      } else if (newUser.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) === null) {
        validation.email.message = 'invalid email'
      } else {
        validation.email.pass = true
        validation.email.message = 'nice email!'
      }
    }

    if (newUser.password !== undefined) {
      if (newUser.password === '') {
        validation.password.message = 'empty not allowed'
      } else if (newUser.password.match(/.{8,}/) === null) {
        validation.password.message = 'any text available over 8 letters!'
      } else {
        validation.password.pass = true
        validation.password.message = 'safe!'
      }
    }

    if (newUser.password_confirm !== undefined) {
      if (newUser.password_confirm === '') {
        validation.passwordConfirm.message = 'empty not allowed'
      } else if (newUser.password !== newUser.password_confirm) {
        validation.passwordConfirm.message = 'password not identical'
      } else {
        validation.passwordConfirm.pass = true;
        validation.passwordConfirm.message = 'identical!'
      }
    }

    setTimeout(() => {
      res.json(validation);
    }, 1000)

  } catch (error) {
    next(error)
  }
})