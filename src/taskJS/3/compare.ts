interface obj {
  upvotes: number;
  num_comments: number;
  created: number;
  dateToSort: number;
  title: string;
}

function compare(a: obj, b: obj) {
  if (
    a['upvotes'] / a['num_comments'] !== b['upvotes'] / b['num_comments']
      ? a['upvotes'] / a['num_comments'] > b['upvotes'] / b['num_comments']
      : [a['dateToSort']] > [b['dateToSort']]
  )
    return -1;

  if (a['upvotes'] / a['num_comments'] < b['upvotes'] / b['num_comments'])
    return 1;
}
export default compare;
