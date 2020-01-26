export default function getTemperatureByMinute(minute, basis) {
  const hour = Math.round(minute / 60);
  const seed = Math.random() * 3;

  return Math.round(Math.sin( hour / 24) * basis + seed );
}
