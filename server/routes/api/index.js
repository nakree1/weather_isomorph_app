import { Router } from 'express';
import auth from './auth';
import city from './city';
import weather from './weather';


export default Router()
  .use('/auth', auth)
  .use('/city', city)
  .use('/weather', weather)
