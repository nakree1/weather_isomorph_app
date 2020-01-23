import React from 'react';
import { Route } from 'react-router-dom';

import NoAuthGuard from '../HOC/NoAuthGuard';

export default NoAuthGuard(Route);
