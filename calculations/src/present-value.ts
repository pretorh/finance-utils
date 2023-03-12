import { getRateMultiplier, Rate } from './utils';

export function presentValueFromFutureValue(
  futureValue: number,
  terms: number,
  rate: Rate,
): number {
  return futureValue * (getRateMultiplier(rate) ** -terms);
}
