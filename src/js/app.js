export default function colorHealth(data) {
  if (data.name === undefined || data.health === undefined || typeof data.health === 'string') return null;
  let healthLevel = '';

  switch (true) {
    case data.health > 0 && data.health < 15:
      healthLevel = 'critical';
      break;
    case data.health >= 15 && data.health <= 50:
      healthLevel = 'wounded';
      break;
    case data.health > 50:
      healthLevel = 'healthy';
      break;
    default:
      healthLevel = 'dead';
      break;
  }

  return healthLevel;
}
