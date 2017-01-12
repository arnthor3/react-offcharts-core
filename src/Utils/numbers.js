export const round = (a, p) =>
  Math.round(`${a}e+${p}`) / `e-${p}`;

export const split = (num, deliminator) => {
  const n = num.split(deliminator);
  return { number: n[0], fraction: n[1] };
};

