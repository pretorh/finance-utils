interface IPercent {
  percent: number;
}

interface IRate {
  rate: number;
}

export type Rate = IRate | IPercent;

export function getRate(rate: Rate): number {
  if ('percent' in rate) {
    return rate.percent / 100;
  }
  return rate.rate;
}

export function getRateMultiplier(rate: Rate): number {
  const i = getRate(rate);
  return 1 + i;
}
