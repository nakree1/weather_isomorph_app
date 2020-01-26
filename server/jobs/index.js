import cron from 'node-cron';
import { differenceInMinutes, startOfDay } from 'date-fns';

import City from '../models/city.model';
import Weather from '../models/weather.model';
import getRandomInt from '../utils/getRandomInt';
import getTemperatureByMinute from '../utils/getTemperatureByMinute';

export default async function() {
  const cities = await City.find();
  const start = startOfDay(new Date());

  cities.forEach((city) => {
    const baseTemp = getRandomInt(5, 20);

    cron.schedule('0 * * * * *', async () => {
      const now = new Date();
      now.setSeconds(0);
      now.setMilliseconds(0);

      const absoluteMinute = differenceInMinutes(now, start);

      const data = {
        city: city._id,
        temperature: getTemperatureByMinute(absoluteMinute, baseTemp),
        scale: 'celsius',
        date: now
      };

      await Weather.create(data);
    });
  });
}
