/**
 * FizzBuzz implementation
 * Prints numbers from 1 to 15
 * For multiples of 3, print "Fizz" instead of the number
 * For multiples of 5, print "Buzz" instead of the number
 * For multiples of both 3 and 5, print "FizzBuzz"
 */

function fizzBuzz(limit = 100) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Execute the FizzBuzz function with limit 15
console.log('Running FizzBuzz up to 15:');
fizzBuzz(15);