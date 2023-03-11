import { expect } from 'chai';
import { futureValueFromPresentValue, futureValueFromRepeatingPayment } from '../src';

describe('future value', () => {
  describe('from present value', () => {
    it('for 0 terms is the initial value', () => {
      const x = futureValueFromPresentValue(1000, 0);
      expect(x).to.equal(1000);
    });
  });

  describe('from repeating payment', () => {
    it('for 0 terms is 0', () => {
      const x = futureValueFromRepeatingPayment(100, 0);
      expect(x).to.equal(0);
    });
  });
});
