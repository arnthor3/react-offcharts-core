export default ({ width, height, margin = 0 }) => {
  const cx = (width - (margin / 2)) / 2;
  const cy = (height - (margin / 2)) / 2;
  const radius = Math.min(cx, cy);
  return { cx, cy, radius };
};




