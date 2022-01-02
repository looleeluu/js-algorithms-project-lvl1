import testing from '../src/testing';

test('testing', () => {
  expect(testing('')).toBe('');
  expect(testing('hello')).toBe('olleh');
});
