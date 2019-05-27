import bestRatio from './bestRatio';
import compare from './compare';
import data from '../../__mocks__/data';
test('it give title of best ratio result', () => {
  expect(bestRatio(data.posts, compare)).toBe('first');
});
