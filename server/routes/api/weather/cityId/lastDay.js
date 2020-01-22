import City from '../../../../models/city.model';

export default async (req, res) => {
  const { cityId } = req.params;

  console.log(cityId, req.params)

  const currentCity = await City.findById(cityId).populate('Weather');
  const { weather } = currentCity;

  res.send({ weather });
}