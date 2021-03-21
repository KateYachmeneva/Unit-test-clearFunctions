export default function checkHealthStatus(player) {
  if (player.health >= 50) {
    return 'healthy';
  }
  if (player.health > 15 && player.health < 50) {
    return 'wounded';
  }
  if (player.health <= 15) {
    return 'critical';
  }
  return 0;
}
