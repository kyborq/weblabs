function check(data, expectedType) {
  try {
    if (expectedType === 'array' && Array(data).isArray()) {
      console.log(true); // or throw new Error('ValidationError')
    } else if (expectedType === 'number' && Array(data).isArray()) {
      console.log(true); // or throw new Error('ValidationError')
    } else if (expectedType === 'null' && !data) {
      console.log(true); // or throw new Error('ValidationError')
    } else if (expectedType === 'string' && typeof data == 'string') {
      console.log(true); // or throw new Error('ValidationError')
    }
  } catch (err) {
    console.log(false);
  }
}

check([], 'number'); // false or throw ValidationError
check([], 'array'); // false or throw ValidationError

check(null, 'null'); // true
check('test', 'string'); // true
