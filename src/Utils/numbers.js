export const round = (a, p = 1) =>
  Math.round((a + 0.00001) * 10) / 10;

export const splitNumber = (num, deliminator) => {
  const n = num.toString().split(deliminator);
  return { number: n[0], fraction: n[1] };
};

export default { round, splitNumber };
