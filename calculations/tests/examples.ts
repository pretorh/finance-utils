const p = { percent: 10 };

export const examples = {
  pvfv: [
    // depends on terms
    {
      pv: 100, terms: 1, rate: p, fv: 110,
    }, {
      pv: 100, terms: 2, rate: p, fv: 121,
    }, {
      pv: 100, terms: 9, rate: p, fv: 235.7947,
    },
    // depends on percent
    {
      pv: 100, terms: 1, rate: { percent: 2 }, fv: 102,
    }, {
      pv: 100, terms: 1, rate: { percent: 12 }, fv: 112,
    }, {
      pv: 100, terms: 1, rate: { percent: 99 }, fv: 199,
    },
    // depends on pv
    {
      pv: 200, terms: 1, rate: p, fv: 220,
    }, {
      pv: 300, terms: 1, rate: p, fv: 330,
    }, {
      pv: 400, terms: 1, rate: p, fv: 440,
    },
  ],
};
