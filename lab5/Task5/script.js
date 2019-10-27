function check(data, expectedType) {
  console.log(Array(data));
}

check([], 'number'); // false or throw ValidationError
check([], 'array'); // false or throw ValidationError

check(null, 'null'); // true
check('test', 'string'); // true
