export function normalizePoints(points) {
  const obj = {};

  points.forEach((point) => {
    const { cityId, id, temp, date } = point;

    if (!obj[cityId]) {
      obj[cityId] = [];
    }

    obj[cityId].push({ id, temp, date: Number(new Date(date)) });
  });

  return obj;
}
