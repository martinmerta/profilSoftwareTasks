import typeToSort from './typeToSort';
test('it return a type to sort', () => {
  expect(typeToSort('upvotes')).toBe('upvotes');
});
test('it return a score when it doesnt contain good type to sort', () => {
  expect(typeToSort('string')).toBe('score');
});
