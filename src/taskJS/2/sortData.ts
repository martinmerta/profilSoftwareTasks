function showSortedData(data: {}, param: string) {
  return [].slice
    .call(data)
    .sort((a: any, b: any) => a[param] - b[param])
    .reverse();
}
export default showSortedData;
