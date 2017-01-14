const getDecimalSeperator = () => {
  const number = 0.1;
  return number.toLocaleString().substring(1, 2);
};

export const round = (a, p = 1) =>
  Math.round((a + 0.00001) * 10) / 10;

export const splitNumber = (num, deliminator = getDecimalSeperator()) => {
  const n = num.toString().split(deliminator);
  return { number: n[0], fraction: (n[1] || '0'), deliminator };
};

export default { round, splitNumber };
