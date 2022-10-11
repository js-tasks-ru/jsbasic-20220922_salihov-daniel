function getMinMax(str) {
  let arr = str.split(" ");
  let num = arr.filter((item) => +item);
  let max = Math.max(...num);
  let min = Math.min(...num);
  let res = { min: min, max: max };
  return res;
}
