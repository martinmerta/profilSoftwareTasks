interface obj {
  upvotes: number;
  num_comments: number;
  created: number;
  dateToSort: number;
  title: string;
}

function onlyOneDayBefore(data: any) {
  const date = new Date().valueOf();
  data.filter((data: obj) => data.dateToSort > date - 86400);
}
export default onlyOneDayBefore;
