//assert import
const assert = require('assert');
const Rooster = require('../index');
// Describe block fo Rooster
describe( 'Rooster' , () => {
  describe('.announceDawn', () => {
    it( 'return a roosterCall', () => {
        //setup
        const expectedCall = 'kikiriki';
        //excercise
        const roosterCall = Rooster.announceDawn();
        // Verify
        assert.equal(roosterCall, expectedCall)
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //setup
      const inputNumber = 5;
      const outputNumber = '5';
      
      // exercise 
      const result = Rooster.timeAtDawn(inputNumber);

      //verify
      assert.strictEqual(result, outputNumber)
    });
    it('test if the argument is greater than 23', () => {
      //setup 
      const input = 25
      const expected = RangeError; 

      //exercise 
      assert.throws(() => {
        Rooster.timeAtDawn(input);
      }, expected);

    })
    it('test if the argument is less than 0', () => {
      //setup
      const input = -1;
      const expected = RangeError;

      //verify
      assert.throws(() => {
         Rooster.timeAtDawn(input);
      }, expected);
    });
  });
});
