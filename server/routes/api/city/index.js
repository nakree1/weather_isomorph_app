import { Router } from 'express';

import list from './list';
import create from './create';


export default Router()
  .get('/list', list)
  .post('/create', create)
