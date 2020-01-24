const status = (state) => state.weather.status;

const getCitiesIdList = (state) => state.weather.citiesIdList;
const getCitiesData = (state) => state.weather.citiesById;
const getPointsData = (state) => state.weather.pointsByCityId;


const getCityById = (state, cityId) => getCitiesData(state)[cityId];
const getPointsById = (state, cityId) => getPointsData(state)[cityId];

export const weatherSelectors = {
  status,
  getCitiesIdList,
  getCitiesData,
  getPointsData,
  getCityById,
  getPointsById
};
