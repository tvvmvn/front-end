const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var { User } = require('../models/model')

passport.use(new GoogleStrategy(
  {
    clientID: '738752283482-olqdsce5bnmv42n97f65mf1i3knpg6hh.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://127.0.0.1:3000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    try {
      var user = await User.findOne({ username: profile.provider + '-' + profile.id })

      if (!user) {
        var user = new User({ username: profile.provider + '-' + profile.id, oauth: true })
        await user.save()
      }

      return cb(null, user)

    } catch (error) {
      console.error(error)
    }
  }
));