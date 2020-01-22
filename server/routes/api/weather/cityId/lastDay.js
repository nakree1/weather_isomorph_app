import City from '../../../../models/city.model';
import Weather from '../../../../models/weather.model';

export default async (req, res) => {
  const { cityId } = req.params;

  console.log(cityId, req.params)

  const weather = await Weather.find({ city: cityId });

  // const currentCity = await City.findById(cityId).populate('weather');
  // console.log(currentCity)
  // const { weather } = currentCity;
  //
  res.send({ weather });
}