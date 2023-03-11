interface IPercent {
  percent: number;
}

type Rate = IPercent;

export function futureValueFromPresentValue(
  presentValue: number,
  terms: number,
  rate: Rate,
): number {
  if (terms === 0) {
    return presentValue;
  }

  const i = rate.percent / 100;
  return presentValue * ((1 + i) ** terms);
}

export function futureValueFromRepeatingPayment(repeatingPayment: number, terms: number): number {
  if (terms === 0) {
    return 0;
  }

  // todo
  return repeatingPayment;
}
