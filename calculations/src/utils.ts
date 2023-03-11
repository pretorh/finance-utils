interface IPercent {
  percent: number;
}

export type Rate = IPercent;

export function getRateMultiplier(rate: Rate): number {
  const i = rate.percent / 100;
  return 1 + i;
}
