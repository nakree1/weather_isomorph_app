import { differenceInMinutes, startOfDay, addMinutes } from 'date-fns';
import City from '../models/city.model';
import Weather from '../models/weather.model';

import getRandomInt from '../utils/getRandomInt';
import getTemperatureByMinute from '../utils/getTemperatureByMinute';

const names = ['Kyiv', 'Kharkiv', 'Lviv'];

async function generateTodayWeather({ cityId, cityName }) {
  const now = new Date();
  const start = startOfDay(now);
  const minutesCount = differenceInMinutes(now, start);
  const baseTemp = getRandomInt(5, 20);

  console.log(`Creating ${minutesCount} weather points for ${cityName}...`);

  for (let i = 0; i <= minutesCount; i++) {
    const data = {
      city: cityId,
      temperature: getTemperatureByMinute(i, baseTemp),
      scale: 'celsius',
      date: addMinutes(start, i)
    };

    await Weather.create(data);
  }

  console.log(`${cityName} completed.`)
}


export default async () => {
  const citiesCount = await City.countDocuments();

  if (citiesCount === 0) {
    for (const name of names) {
      const city = await City.create({ name });
      console.log('Created new city:', name);
      await generateTodayWeather({ cityId: city._id, cityName: city.name })
    }
  }
}
