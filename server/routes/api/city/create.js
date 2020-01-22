import City from '../../../models/city.model';

export default async (req, res) => {
  const { name } = req.body;

  const city = new City({ name });

  await city.save();

  res.send(city);
}