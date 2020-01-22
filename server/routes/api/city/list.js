import City from '../../../models/city.model';

export default async (req, res) => {
  const cities = await City.find();

  res.send(cities);
}