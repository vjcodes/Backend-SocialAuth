const passport = require('passport')

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "109956315165-gbfm1so9r6sj32s8acgde7rlstvquvoq.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:400/auth/google/callback"
  },
  () => {
    // callback
  }
))