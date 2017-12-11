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


// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

var detectNetwork = function(cardNumber) {
  var prefix = cardNumber[0] + cardNumber[1];
  var amexPrefix = ['34', '37'];
  var dinerPrefix = ['38', '39'];
  var visaPrefix = '4';
  var masterPrefix = ['51', '52', '53', '54', '55'];
  var discoverPrefix = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  var maestroPrefix = ['5018', '5020', '5038', '6304']
  var chinaPrefix = combineArrays(combineArrays(convertArrayToString(createArray(624, 626)), convertArrayToString(createArray(6282, 6288))), convertArrayToString(createArray(622126, 622925)));
  
  // console.log(chinaPrefix);
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
  if ((prefix + '11' === discoverPrefix[0] || prefix === discoverPrefix[7]) && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  }
  for (var i = 0; i < discoverPrefix.length; i++) {
    if (prefix + cardNumber[2] === discoverPrefix[i] && (cardNumber.length === 16 || cardNumber.length === 19)) {
      return 'Discover'
    }
  }
  for (var i = 0; i < maestroPrefix.length; i++) {
    if (prefix + cardNumber[2] + cardNumber[3] === maestroPrefix[i] && isInRange(cardNumber.length, 12, 19)) {
      return 'Maestro'
    }
  }
  for (var i = 0; i < chinaPrefix.length; i++) {
    // console.log((prefix + cardNumber[2] === chinaPrefix[i]), prefix + cardNumber[2], chinaPrefix[i])
    if ((prefix + cardNumber[2] === chinaPrefix[i] || prefix + cardNumber[2] + cardNumber[3] === chinaPrefix[i] || prefix + cardNumber[2] + cardNumber[3] + cardNumber[4] + cardNumber[5] === chinaPrefix[i]) && isInRange(cardNumber.length, 16, 19)) {
      return 'China UnionPay'
    }
  }
};

function combineArrays(arr1, arr2) {
  var concat = arr1.concat(arr2);
  // concat = combineArrays(concat, arr3)
  return concat;
}

function convertArrayToString(arr) {
  return arr.map(function(i) {
    return i.toString();
  })
}

function createArray(start, end) {
  array = [];
  for (var i = start; i <= end; i++) {
    array.push(i)
  }
  return array;
}

function isInRange(actual, low, high) {
  if (high >= actual && actual >= low) {
    return true;
  } else {
    return false;
  }
}

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
assertEqual(detectNetwork('501812345678'), 'Maestro', 'It should return Maestro credit card name');
assertEqual(detectNetwork('624012345678901234'), 'China UnionPay', 'It has a prefix of 624 and a length of 18');
assertEqual(detectNetwork('628201234567890123'), 'China UnionPay', 'It has a prefix of 6282 and a length of 18');
assertEqual(detectNetwork('622126012345678901'), 'China UnionPay', 'It has a prefix of 622126 and a length of 18');
assertEqual(isInRange(12, 12, 19), true, 'It should check if value is in range')
// assertEqual(createArray(6282, 6288))
// console.log(createArray(6282, 6288));

// console.log(combineArrays(createArray(6282, 6288), createArray(1, 9)))
// console.log(combineArrays(createArray(622126, 622925), createArray(624, 626)));
// console.log(convertArrayToString(createArray(624, 626)))
// console.log(chinaArr1)
// console.log(chinaArr2)
// console.log(chinaArr3)
// console.log(detectNetwork('62456789012345678'))

// function testAllCards(arr) {
//   return arr.map(function(i) {
//     return detectNetwork(i)
//   })
// }
// testAllCards(combineArrays(combineArrays(convertArrayToString(createArray(624, 626)), convertArrayToString(createArray(6282, 6288)), convertArrayToString(createArray(622126, 622925)))));


