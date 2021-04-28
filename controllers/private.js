exports.getPrivateRoute = (req, res, next) => {
user = req.user.username
res.send(`Welcome ${user} !!!`)
}