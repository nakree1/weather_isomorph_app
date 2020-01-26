import { Router } from 'express';

import isAuthenticated from '../../../middlewares/isAuthenticated';
import google from './google';
import logout from './logout';
import user from './user';

export default Router()
  .use('/google', google)
  .post('/logout', logout)
  .get('/user', isAuthenticated, user);
