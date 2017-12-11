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


// describe('should support China UnionPay', function() {
//   var expect = chai.expect;

//   // it('has a prefix of 624-626 and a length of 16', function() {
//   //   expect(detectNetwork('6240123456789012')).to.equal('China UnionPay')
//   // });
//   for (var prefix = 624; prefix <= 626; prefix++) {
//   (function(prefix) {
//     it('has a prefix of ' + prefix + ' and a length of 16', function() {
//     expect(detectNetwork('6240123456789012')).to.equal('China UnionPay')
//   });
//     it('has a prefix of ' + prefix + ' and a length of 17', function() {
//     expect(detectNetwork('62401234567890123')).to.equal('China UnionPay')
//   });
//     it('has a prefix of ' + prefix + ' and a length of 18', function() {
//     expect(detectNetwork('624012345678901245')).to.equal('China UnionPay')
//   });
//     it('has a prefix of ' + prefix + ' and a length of 19', function() {
//     expect(detectNetwork('6240123456789012456')).to.equal('China UnionPay')
//   });
//   })(prefix)
// }
// });


describe('should support Switch');

