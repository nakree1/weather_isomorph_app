import axios from 'axios';

function createApiRouting(client) {
  return {
    auth: {
      getUserData: () => client.get('/api/auth/user'),
      logout: () => client.post('/api/auth/logout')
    },
    weather: {
      lastDay: (cityId) => client.get(`/api/weather/${cityId}/lastDay`)
    },
    city: {
      getList: () => client.get('/api/city/list')
    }
  };
}

export function createApiService(config) {
  const instance = axios.create(config);

  instance.interceptors.response.use((res) => res.data);

  return {
    axios: instance,
    api: createApiRouting(instance)
  };
}
