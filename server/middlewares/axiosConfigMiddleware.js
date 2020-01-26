import { createApiService } from '../../src/config/api';

export default function axiosConfigMiddleware(req, res, next) {
  const backend = createApiService({
    baseURL: req.base,
    timeout: 15000,
    withCredentials: true,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Accept-Encoding': 'gzip, deflate, br',
      'User-Agent': req.header('User-Agent') || '',
      Cookie:
        Object.keys(req.cookies)
          .map((key) => `${key}=${encodeURIComponent(req.cookies[key])}`)
          .join('; ') || ''
    }
  });

  res.axios = backend.axios;
  res.api = backend.api;

  next();
}
