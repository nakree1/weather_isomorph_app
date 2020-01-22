import { Router } from 'express';

import lastDay from './cityId/lastDay';

export default Router()
  .get('/:cityId/lastDay', lastDay);
