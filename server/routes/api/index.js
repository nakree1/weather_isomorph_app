import { Router } from 'express';
import isAuthenticated from '../../middlewares/isAuthenticated';
import auth from './auth';
import city from './city';
import weather from './weather';


export default Router()
  .use('/auth', auth)
  .use('/city', city)
  .use('/weather', weather)
  .get('/secret', isAuthenticated, (req, res) => {
  console.log(req.user);

  res.send({
    status: 'success',
    user: req.user
  })
})
