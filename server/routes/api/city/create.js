import City from '../../../models/city.model';

export default async (req, res) => {
  const { name } = req.body;

  const city = await City.create({ name });

  res.send(city);
}
