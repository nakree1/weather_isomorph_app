import { Router } from 'express';
import isAuthenticated from '../../../middlewares/isAuthenticated';
import google from './google';

export default Router()
  .use('/google', google)
  .post('/logout', (req, res) => {
    req.logout();
    res.end();
  })
  .get('/user', isAuthenticated, (req, res) => {
    res.send(req.user);
  });
