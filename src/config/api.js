import axios from 'axios';

function createApiRouting(client) {
  return ({
    auth: {
      getUserData: (data) => client.post('/api/settings/select-locations', data),
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
