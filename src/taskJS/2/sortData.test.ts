import showSortedData from './sortData';
import typeToSort from './typeToSort';
import data from '../../__mocks__/data';
test('it return array with sorted data by added type', () => {
  expect(showSortedData(data.posts, typeToSort('upvotes'))).toBeInstanceOf(
    Array
  );
});
test('it return sorted data', () => {
  expect(showSortedData(data.posts, typeToSort('upvotes'))[0]).toEqual({
    created: 11,
    dateToSort: 55600,
    num_comments: 1,
    title: 'first',
    upvotes: 100
  });
});
