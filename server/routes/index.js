import { Router } from 'express';
import render from './render';
import api from './api';

export default Router()
  .use('/api', api)
  .use('/', render);
