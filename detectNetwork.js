// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  //It should have a variable for prefix
  var prefix = cardNumber[0] + cardNumber[1];

  // It should variables for known credit card prefix values
  var amexPrefix = ['34', '37'];
  var dinerPrefix = ['38', '39'];

  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // It should check prefix for known values
  if (prefix === amexPrefix[0] || prefix === amexPrefix[1] && cardNumber.length === 15) {
  	return 'American Express';
  }
  if (prefix === dinerPrefix[0] || prefix === dinerPrefix[1] && cardNumber.length === 14) {
  	return 'Diner\'s Club';
  }

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // It should return unidentified if card prefix has no matches
};

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('Passed');
	} else {
		console.log('Failed [' + testName + '] the result ' + actual + ' was expected to be ' + expected);
	}
}

// assertEqual(detectNetwork('343456789012345'), '34', 'It should create prefix variable'); // If prefix set as return, test will fail final function
assertEqual(detectNetwork('343456789012345'), 'American Express', 'It should return correct credit card name');
