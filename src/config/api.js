import axios from 'axios';

function createApiRouting(client) {
  return ({
    auth: {
      getUserData: () => client.get('/api/auth/user'),
      logout: () => client.post('/api/auth/logout')
    },
    weather: {}
  })
};


export function createApiService(config) {
  const instance = axios.create(config);

  instance.interceptors.response.use((res) => res.data);

  return {
    axios: instance,
    api: createApiRouting(instance)
  }
}
