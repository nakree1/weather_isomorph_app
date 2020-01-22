import { Router } from 'express';
import city from './city';
import weather from './weather';


export default Router()
  .use('/city', city)
  .use('/weather', weather)
