import { scaleLinear } from 'd3-scale';

/*
  return the chart dimensions
*/
export const dimensions = ({ width, height, margin = { height: 0, width: 0 } }) => {
  const cx = (width - (+margin.width / 2)) / 2;
  const cy = (height - (+margin.height / 2)) / 2;
  const radius = Math.min(cx, cy);
  return { cx, cy, radius };
};

/*
  returns an arc scale based on the arc range
*/
export const scale = ({ startAngle, endAngle, domain = [0, 100] }) => (
  scaleLinear().range([startAngle, endAngle]).domain(domain)
);

/*
  Rad to Deg
*/
export const degToRad = (deg = 0) => deg * (Math.PI / 180);

