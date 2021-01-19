const router = require ("express").Router()

//auth login
router.get("/login", (req, res) => {
    res.render("login")
})

//auth logout
router.get("/logout", (req,res) =>{
    //TODO: handle with passport
    res.send("Logging out")
})

//auth with google
router.get("/google", (req, res) =>{
    //TODO: handle with passport
    res.send("Login With Google")
})

module.exports = router;