import { Rate, getRate, getRateMultiplier } from './utils';

export function futureValueFromPresentValue(
  presentValue: number,
  terms: number,
  rate: Rate,
): number {
  return presentValue * (getRateMultiplier(rate) ** terms);
}

export function futureValueFromRepeatingPayment(
  repeatingPayment: number,
  terms: number,
  rate: Rate,
): number {
  const multiplier = getRateMultiplier(rate);
  const nominator = (multiplier ** terms) - 1;
  return repeatingPayment * (nominator / getRate(rate));
}

interface IFutureValue {
  presentValue: number;
  repeatingPayment: number;
  terms: number;
  rate: Rate;
}

export function futureValue(params: IFutureValue): number {
  const { terms, rate } = params;

  const fromPresent = futureValueFromPresentValue(params.presentValue, terms, rate);
  const fromRepeat = futureValueFromRepeatingPayment(params.repeatingPayment, terms, rate);
  return fromPresent + fromRepeat;
}
