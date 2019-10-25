function pulloutArray(arr) {
  var resultArr = [];
  for (var i = 0; i < arr.length; i++) {
    // if (isNaN(arr[i]) === false && arr[i] !== null) {
    if (typeof arr[i] === 'object' && !isNaN(arr[i]) && arr[i] !== null) {
      for (var j = 0; j < arr[i].length; j++) {
        resultArr.push(arr[i][j]);
      }
    } else if (!isNaN(arr[i]) && arr[i] !== null) {
      resultArr.push(arr[i]);
    }
    // }
  }
  arr = resultArr;

  console.log(arr);
  // return arr;
}

pulloutArray([1, 2, 3]);
pulloutArray([]);
pulloutArray([1, [2, 3, 4], 5]);
pulloutArray([1, [2, 3, 4], 5, [1]]);
pulloutArray([1, [1], null, NaN, ['test']]);
