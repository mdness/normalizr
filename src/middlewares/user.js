export const loggedIn = (req, res, next) => {
    console.log(req.isAuth());
    if(!req.isAuth()) return res.status(401).json({msg: 'Not authorized'});
    next();
}