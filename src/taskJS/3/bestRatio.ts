import compare from './compare';

function bestRatio(data: any, compareFunction: Function) {
  return data.sort(compareFunction)[0]['title'];
}
export default bestRatio;
