import { expect } from 'chai';
import { presentValueFromFutureValue } from '../src';
import { examples } from './examples';

const delta = 0.0001;

describe('present value', () => {
  describe('from future value', () => {
    it('for 0 terms is the future value', () => {
      const x = presentValueFromFutureValue(1000, 0, { percent: 10 });
      expect(x).to.equal(1000);
    });

    describe('examples', () => {
      examples.pvfv.forEach((example) => {
        it(`to get fv=${example.fv} after ${example.terms} @ ${example.rate.percent}% you need pv = ${example.pv}`, () => {
          expect(presentValueFromFutureValue(example.fv, example.terms, example.rate))
            .to.be.closeTo(example.pv, delta);
        });
      });
    });

    it('can use rate instead of percent', () => {
      expect(presentValueFromFutureValue(100, 1, { percent: 2 })).to.be.equal(
        presentValueFromFutureValue(100, 1, { rate: 0.02 }),
      );
      expect(presentValueFromFutureValue(400, 9, { percent: 99 })).to.be.equal(
        presentValueFromFutureValue(400, 9, { rate: 0.99 }),
      );
    });
  });
});
