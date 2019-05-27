function typeToSort(type: string = 'score'): string {
  if (
    type === 'score' ||
    type === 'upvotes' ||
    type === 'num_comments' ||
    type === 'created'
  ) {
    return type;
  }
  return 'score';
}
export default typeToSort;
