import { Rate, getRate, getRateMultiplier } from './utils';

export function futureValueFromPresentValue(
  presentValue: number,
  terms: number,
  rate: Rate,
): number {
  if (terms === 0) {
    return presentValue;
  }

  return presentValue * (getRateMultiplier(rate) ** terms);
}

export function futureValueFromRepeatingPayment(
  repeatingPayment: number,
  terms: number,
  rate: Rate,
): number {
  if (terms === 0) {
    return 0;
  }

  const multiplier = getRateMultiplier(rate);
  const nominator = (multiplier ** terms) - 1;
  return repeatingPayment * (nominator / getRate(rate));
}
