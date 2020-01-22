import { Router } from 'express';
import google from './google';

export default Router()
  .use('/google', google)
  .get('/logout', (req, res) => {
    req.logout();
    res.end();
  })