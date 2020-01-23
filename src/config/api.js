import axios from 'axios';

function createApiRouting(client) {
  return ({
    auth: {
      getUserData: () => client.get('/api/auth/user'),
    },
    weather: {}
  })
};


export function createApiService(config) {
  const instance = axios.create(config);

  return {
    axios: instance,
    api: createApiRouting(instance)
  }
}
