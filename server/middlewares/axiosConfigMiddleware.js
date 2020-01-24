import { createApiService } from '../../src/config/api';

export default function axiosConfigMiddleware(req, res, next){
  const backend = createApiService({
    baseURL: 'http://localhost:3010/',
    timeout: 15000,
    withCredentials: true,
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": req.header("User-Agent") || '',
      "Cookie": Object.keys(req.cookies)
        .map(key => `${key}=${encodeURIComponent(req.cookies[key])}`)
        .join("; ") || ''
    }
  })

  // backend.axios.interceptors.request.use(
  //   (config) => {
  //     // console.log('AXIOS>REQ', config)
  //     return config
  //   },
  //   (error) => Promise.reject(error)
  // )
  //
  // backend.axios.interceptors.response.use(
  //   (response) => {
  //     console.log(`[${response.request.path}][${response.status}]`)
  //     return response
  //   },
  //   (error) => {
  //     console.log(`[${error.request.path}][${error.response.status}]`)
  //     return Promise.reject(error)
  //   }
  // )


  res.axios = backend.axios;
  res.api = backend.api;

  next()
};
