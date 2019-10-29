function pulloutArray(arr) {
  if (Array.isArray(arr)) {
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
      // if (isNaN(arr[i]) === false && arr[i] !== null) {
      if (Array.isArray(arr[i]) && !isNaN(arr[i]) && arr[i] !== null) {
        for (var j = 0; j < arr[i].length; j++) {
          resultArr.push(arr[i][j]);
        }
      } else if (!isNaN(arr[i]) && arr[i] !== null) {
        resultArr.push(arr[i]);
      }
      // }
    }
  } else {
    return null;
  }

  return resultArr;
}

console.log(pulloutArray([1, 2, 3]));
console.log(pulloutArray([]));
console.log(pulloutArray([1, [2, 3, 4], 5]));
console.log(pulloutArray([1, [2, 3, 4], 5, [1]]));
console.log(pulloutArray([1, [1], null, NaN, ['test']]));
