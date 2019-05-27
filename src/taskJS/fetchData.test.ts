import fetchData from './fetchData';
const fetch = require('node-fetch');
jest.mock('../__mocks__/data.ts');
test('it fetch data from api', () => {
  fetchData().then(data => expect(data).toReturn());
});
