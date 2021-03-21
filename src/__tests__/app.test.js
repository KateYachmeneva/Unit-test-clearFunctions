import checkHealthStatus from '../js/user';

test('should check status for healh > 50', () => {
  expect(checkHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});
test('should check status for healh = 50', () => {
  expect(checkHealthStatus({ name: 'Маг', health: 50 })).toBe('healthy');
});
test('should check status for healh = 30', () => {
  expect(checkHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
});
test('should check status for healh = 15', () => {
  expect(checkHealthStatus({ name: 'Маг', health: 15 })).toBe('critical');
});
test('should check status for healh < 15', () => {
  expect(checkHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
});
