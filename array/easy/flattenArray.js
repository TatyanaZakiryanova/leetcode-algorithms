function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6, [7, 8]])); // [1, 2, 3, 4, 5, 6, 7, 8]
