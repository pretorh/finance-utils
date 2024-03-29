import { expect } from 'chai';
import { futureValueFromPresentValue, futureValueFromRepeatingPayment } from '../src';
import { examples } from './examples';

const delta = 0.0001;

describe('future value', () => {
  describe('from present value', () => {
    it('for 0 terms is the initial value', () => {
      const x = futureValueFromPresentValue(1000, 0, { percent: 10 });
      expect(x).to.equal(1000);
    });

    describe('examples', () => {
      examples.pvfv.forEach((example) => {
        it(`pv=${example.pv} @ ${example.rate.percent}% for ${example.terms} terms = ${example.fv}`, () => {
          expect(futureValueFromPresentValue(example.pv, example.terms, example.rate))
            .to.be.closeTo(example.fv, delta);
        });
      });
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
    const p = { percent: 10 };

    it('for 0 terms is 0', () => {
      const x = futureValueFromRepeatingPayment(100, 0, p);
      expect(x).to.equal(0);
    });

    it('for 1 term is the repeating value', () => {
      expect(futureValueFromRepeatingPayment(100, 1, p)).to.be.closeTo(100, delta);
    });

    it('examples', () => {
      expect(futureValueFromRepeatingPayment(100, 2, p)).to.be.closeTo(210, delta);
      expect(futureValueFromRepeatingPayment(100, 3, p)).to.be.closeTo(331, delta);
      expect(futureValueFromRepeatingPayment(100, 9, p)).to.be.closeTo(1357.9476, delta);

      expect(futureValueFromRepeatingPayment(100, 2, { percent: 2 })).to.be.closeTo(202, delta);
      expect(futureValueFromRepeatingPayment(100, 2, { percent: 12 })).to.be.closeTo(212, delta);
      expect(futureValueFromRepeatingPayment(100, 2, { percent: 99 })).to.be.closeTo(299, delta);

      expect(futureValueFromRepeatingPayment(200, 2, p)).to.be.closeTo(420, delta);
      expect(futureValueFromRepeatingPayment(300, 2, p)).to.be.closeTo(630, delta);
      expect(futureValueFromRepeatingPayment(400, 2, p)).to.be.closeTo(840, delta);
    });

    it('can use rate instead of percent', () => {
      expect(futureValueFromRepeatingPayment(100, 2, { percent: 2 })).to.be.equal(
        futureValueFromRepeatingPayment(100, 2, { rate: 0.02 }),
      );
      expect(futureValueFromRepeatingPayment(400, 9, { percent: 99 })).to.be.equal(
        futureValueFromRepeatingPayment(400, 9, { rate: 0.99 }),
      );
    });
  });
});
