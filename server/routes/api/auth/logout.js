export default (req, res) => {
  req.logout();
  res.end();
}
