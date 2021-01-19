const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
const dotenv = require("dotenv").config({})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
}), () => {
    //? passport callback function
})