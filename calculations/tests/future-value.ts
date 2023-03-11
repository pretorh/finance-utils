import { expect } from 'chai';
import { futureValueFromPresentValue, futureValueFromRepeatingPayment } from '../src';

const delta = 0.0001;

describe('future value', () => {
  describe('from present value', () => {
    it('for 0 terms is the initial value', () => {
      const x = futureValueFromPresentValue(1000, 0, { percent: 10 });
      expect(x).to.equal(1000);
    });

    it('examples', () => {
      const p = { percent: 10 };
      expect(futureValueFromPresentValue(100, 1, p)).to.be.closeTo(110, delta);
      expect(futureValueFromPresentValue(100, 2, p)).to.be.closeTo(121, delta);
      expect(futureValueFromPresentValue(100, 9, p)).to.be.closeTo(235.7947, delta);

      expect(futureValueFromPresentValue(100, 1, { percent: 2 })).to.be.closeTo(102, delta);
      expect(futureValueFromPresentValue(100, 1, { percent: 12 })).to.be.closeTo(112, delta);
      expect(futureValueFromPresentValue(100, 1, { percent: 99 })).to.be.closeTo(199, delta);

      expect(futureValueFromPresentValue(200, 1, p)).to.be.closeTo(220, delta);
      expect(futureValueFromPresentValue(300, 1, p)).to.be.closeTo(330, delta);
      expect(futureValueFromPresentValue(400, 1, p)).to.be.closeTo(440, delta);
    });

    it('can use rate instead of percent', () => {
      expect(futureValueFromPresentValue(100, 1, { percent: 2 })).to.be.equal(
        futureValueFromPresentValue(100, 1, { rate: 0.02 }),
      );
      expect(futureValueFromPresentValue(400, 9, { percent: 99 })).to.be.equal(
        futureValueFromPresentValue(400, 9, { rate: 0.99 }),
      );
    });
  });

  describe('from repeating payment', () => {
    it('for 0 terms is 0', () => {
      const x = futureValueFromRepeatingPayment(100, 0);
      expect(x).to.equal(0);
    });
  });
});
