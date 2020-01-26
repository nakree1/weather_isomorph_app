export default function isAuthenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(401);
    res.send('You should login');
  }
}
