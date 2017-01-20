export default ({ width, height, margin = {} }) => {
  const cx = (width - (+margin.width / 2)) / 2;
  const cy = (height - (+margin.height / 2)) / 2;
  const radius = Math.min(cx, cy);
  return { cx, cy, radius };
};
