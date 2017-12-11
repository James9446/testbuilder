/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

var FILL_ME_IN = 'Fill this value in';

// ---=== Diner's Club ===--- 
describe('Diner\'s Club', function() {
  var expect = chai.expect;

  it('has a prefix of 38 and a length of 14', function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club');
  });
  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club');
  });
});

// ---=== Amercian Express ===---
describe('American Express', function() {
  var expect = chai.expect;
  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });
  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});

// ---=== Visa ===---
describe('Visa', function() {
  var expect = chai.expect;

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

// ---=== MasterCard ===---
describe('MasterCard', function() {
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
});

// ---=== Discover ===---
describe('Discover', function() {
  var expect = chai.expect;
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '1123456789012')).to.equal('Discover')
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '1123456789012345')).to.equal('Discover')
      });
    })(prefix)
  }
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789012')).to.equal('Discover')
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6511123456789012')).to.equal('Discover')
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789012345')).to.equal('Discover')
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6511123456789012345')).to.equal('Discover')
  });
});
  
// ---=== Maestro ===---
describe('Maestro', function() {
  var expect = chai.expect;
  var lengthAdded = '';
  for (var i = 12; i <= 19; i++) {
    lengthAdded += '0';
    (function(lengthAdded) {
      it('has a prefix of 5018 and a length of ' + i, function() {
        expect(detectNetwork('50181234567' + lengthAdded)).to.equal('Maestro')
      });
      it('has a prefix of 5020 and a length of ' + i, function() {
        expect(detectNetwork('50201234567' + lengthAdded)).to.equal('Maestro')
      });
      it('has a prefix of 5038 and a length of ' + i, function() {
        expect(detectNetwork('50381234567' + lengthAdded)).to.equal('Maestro')
      });
      it('has a prefix of 6304 and a length of ' + i, function() {
        expect(detectNetwork('63041234567' + lengthAdded)).to.equal('Maestro')
      });
    })(lengthAdded)
  }
});

// ---=== Switch ===---
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
describe('should support Switch', function() {
  var expect = chai.expect;
  it('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903012345678901')).to.equal('Switch')
  });
  it('has a prefix of 4903 and a length of 18', function() {
    expect(detectNetwork('490301234567890123')).to.equal('Switch')
  });
  it('has a prefix of 4903 and a length of 19', function() {
    expect(detectNetwork('4903012345678901234')).to.equal('Switch')
  });
  it('has a prefix of 4905 and a length of 16', function() {
    expect(detectNetwork('4905012345678901')).to.equal('Switch')
  });
  it('has a prefix of 4905 and a length of 18', function() {
    expect(detectNetwork('490501234567890123')).to.equal('Switch')
  });
  it('has a prefix of 4905 and a length of 19', function() {
    expect(detectNetwork('4905012345678901234')).to.equal('Switch')
  });
  it('has a prefix of 4911 and a length of 16', function() {
    expect(detectNetwork('4911012345678901')).to.equal('Switch')
  });
  it('has a prefix of 4911 and a length of 18', function() {
    expect(detectNetwork('491101234567890123')).to.equal('Switch')
  });
  it('has a prefix of 4911 and a length of 19', function() {
    expect(detectNetwork('4911012345678901234')).to.equal('Switch')
  });
  it('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936012345678901')).to.equal('Switch')
  });
  it('has a prefix of 4936 and a length of 18', function() {
    expect(detectNetwork('493601234567890123')).to.equal('Switch')
  });
  it('has a prefix of 4936 and a length of 19', function() {
    expect(detectNetwork('4936012345678901234')).to.equal('Switch')
  });
  it('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759012345678901')).to.equal('Switch')
  });
  it('has a prefix of 6759 and a length of 18', function() {
    expect(detectNetwork('675901234567890123')).to.equal('Switch')
  });
  it('has a prefix of 6759 and a length of 19', function() {
    expect(detectNetwork('6759012345678901234')).to.equal('Switch')
  });
  it('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333012345678901')).to.equal('Switch')
  });
  it('has a prefix of 6333 and a length of 18', function() {
    expect(detectNetwork('633301234567890123')).to.equal('Switch')
  });
  it('has a prefix of 6333 and a length of 19', function() {
    expect(detectNetwork('6333012345678901234')).to.equal('Switch')
  });
  it('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('5641820123456789')).to.equal('Switch')
  });
  it('has a prefix of 564182 and a length of 18', function() {
    expect(detectNetwork('564182012345678901')).to.equal('Switch')
  });
  it('has a prefix of 564182 and a length of 19', function() {
    expect(detectNetwork('5641820123456789012')).to.equal('Switch')
  });
  it('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('6331100123456789')).to.equal('Switch')
  });
  it('has a prefix of 633110 and a length of 18', function() {
    expect(detectNetwork('633110012345678901')).to.equal('Switch')
  });
  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331100123456789012')).to.equal('Switch')
  });
});

  // ---=== China UnionPay ===---

describe('should support China UnionPay', function() {
  var expect = chai.expect;
  var lengthAdded = '';
  var prefix = 623;   
  var cardLength; 
  
  for (var i = 0; i < 40; i++) {  // for loop is set to 40 to accomodate every iteration needed for 624-626, and 6282-6288 at every length
    if (i % 3 === 0 && i < 12) {  // % 3 is used because there are 3 different prefix values in the 624-626 range
      lengthAdded += '0'; // lengthAdded is increased and prefix reset
      prefix = 623; 
    } else if (i === 12) {  // at a 12 count the prefix is changed to the next range and lengthAdded is reset
      lengthAdded = '';
      prefix = 6281;
    }
    if ((i - 12) % 7 === 0 && i > 12) {  // % 7 is used because there are 7 different prefix values in the 6282-6288 range
      lengthAdded += '0'; // lengthAdded is increased and prefix reset
      prefix = 6281;
    }
    prefix++; // prefix increased throuh every iteration 
    cardLength = prefix + '012345678901' + lengthAdded;
    (function(prefix, lengthAdded) {
      it('has a prefix of ' + prefix + ' and a length of ' + cardLength.length, function() {
      expect(detectNetwork(prefix + '012345678901' + lengthAdded)).to.equal('China UnionPay')
      });
    })(prefix, lengthAdded)
  }
  // May try to refactor everything into a single loop - for now I'm very happy
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '0123456789')).to.equal('China UnionPay')
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '01234567890')).to.equal('China UnionPay')
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '012345678901')).to.equal('China UnionPay')
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '0123456789012')).to.equal('China UnionPay')
      });
    })(prefix)
  }
});

