exports.getPrivateRoute = (req, res, next) => {
user = req.user
res.send(user)
}