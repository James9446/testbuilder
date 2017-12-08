// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// 38345678901234 (Diner's Club)
// 39345678901234 (Diner's Club)
// 343456789012345 (American Express)
// 373456789012345 (American Express)
// 4123456789012 (Visa)
// 4123456789012345 (Visa)
// 4123456789012345678 (Visa)
// 5112345678901234 (MasterCard)
// 5212345678901234 (MasterCard)
// 5312345678901234 (MasterCard)
// 5412345678901234 (MasterCard)
// 5512345678901234 (MasterCard)

// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

var detectNetwork = function(cardNumber) {
  var prefix = cardNumber[0] + cardNumber[1];
  var amexPrefix = ['34', '37'];
  var dinerPrefix = ['38', '39'];
  var visaPrefix = '4';
  var masterPrefix = ['51', '52', '53', '54', '55']

  if ((prefix === amexPrefix[0] || prefix === amexPrefix[1]) && cardNumber.length === 15) {
  	return 'American Express';
  }
  if ((prefix === dinerPrefix[0] || prefix === dinerPrefix[1]) && cardNumber.length === 14) {
  	return 'Diner\'s Club';
  }
  if ((prefix[0] === visaPrefix) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Visa';
  }  
  for (var i = 0; i < masterPrefix.length; i++) {
  	if (prefix === masterPrefix[i] && cardNumber.length === 16) {
  		return 'MasterCard'
  	}
  }

};

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('Passed');
	} else {
		console.log('Failed [' + testName + '] the result ' + actual + ' was expected to be ' + expected);
	}
}

//console.log(detectNetwork('5112345678901234'));

// assertEqual(detectNetwork('343456789012345'), '34', 'It should create prefix variable'); // If prefix set as return, test will fail final function
assertEqual(detectNetwork('343456789012345'), 'American Express', 'It should return American Express credit card name');
assertEqual(detectNetwork('4123456789012'), 'Visa', 'It should return Visa credit card name');
assertEqual(detectNetwork('4123456789012345'), 'Visa', 'It should return Visa credit card name');
assertEqual(detectNetwork('4123456789012345678'), 'Visa', 'It should return Visa credit card name');
assertEqual(detectNetwork('5112345678901234'), 'MasterCard', 'It should return MasterCard credit card name');
assertEqual(detectNetwork('5212345678901234'), 'MasterCard', 'It should return MasterCard credit card name');
assertEqual(detectNetwork('5312345678901234'), 'MasterCard', 'It should return MasterCard credit card name');
assertEqual(detectNetwork('5412345678901234'), 'MasterCard', 'It should return MasterCard credit card name');
assertEqual(detectNetwork('5512345678901234'), 'MasterCard', 'It should return MasterCard credit card name');
