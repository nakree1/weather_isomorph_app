import Weather from '../../../../models/weather.model';
import { startOfDay, endOfDay } from 'date-fns';

export default async (req, res) => {
  const { cityId } = req.params;

  const now = new Date();

  const start = startOfDay(now);
  const end = endOfDay(now);

  const weather = await Weather.find({
    city: cityId,
    date: { $gte: start, $lte: end }
  }).sort({ date: 'asc' });

  res.send(weather.map((data) => data.toObject()));
};
