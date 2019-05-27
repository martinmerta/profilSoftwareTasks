const fetch = require('node-fetch');
const apiUrl: string = 'https://www.reddit.com/r/funny.json';
const fetchData = (): Promise<any> =>
  fetch(apiUrl)
    .then((data: Response) => data.json() as Promise<any>)
    .then(resp => resp.data.children as Promise<any>)
    .then(
      resp =>
        resp.map(({ data }) => ({
          title: data.title,
          upvotes: data.ups,
          score: data.score,
          num_comments: data.num_comments,
          created: new Date(data.created * 1000).toLocaleString(),
          dateToSort: data.created
        })) as Promise<any>
    )
    .catch(err => {
      throw new TypeError(err);
    });

export default fetchData;
