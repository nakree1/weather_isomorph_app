import cron from 'node-cron';

import City from '../models/city.model';
import Weather from '../models/weather.model';

export default async function() {
  const cities = await City.find();

  cities.forEach((city) => {
    cron.schedule('0 * * * * *', async () => {
      const now = new Date();
      now.setSeconds(0);
      now.setMilliseconds(0);

      const data = {
        city: city._id,
        temperature: Math.round(Math.random() * 10),
        scale: 'celsius',
        date: now
      };

      await Weather.create(data);
    });
  });
}
