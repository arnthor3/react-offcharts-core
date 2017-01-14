import React, { PropTypes } from 'react';
import { color } from 'd3-color';

const createStops = (fill) => {
  const fillShades = color(fill);
  return [
    <stop offset="0" stopColor={fillShades.darker(0.5)} />,
    <stop offset="0.25" stopColor={fillShades.darker(0.25)} />,
    <stop offset="0.5" stopColor={fillShades} />,
    <stop offset="0.75" stopColor={fillShades.brighter(0.25)} />,
    <stop offset="1" stopColor={fillShades.brighter(0.5)} />,
  ]
};

export const LinearGradient = ({ id, x1, x2, y1, y2, stops, gradientUnits }) => (
  <defs>
    <linearGradient
      id={id}
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
      gradientUnits="userSpaceOnUse"
    >
      {stops}
    </linearGradient>
  </defs>
);

LinearGradient.propTypes = {
  id: PropTypes.string,
  x1: PropTypes.string,
  x2: PropTypes.string,
  y1: PropTypes.string,
  y2: PropTypes.string,
  gradientUnits: PropTypes.string,
  stops: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

LinearGradient.defaultProps = {
  x1: 0,
  x2: 0,
  y1: 0,
  y2: 1,
  gradientUnits: 'userSpaceOnUse',
};


export const RadialGradient = ({ id, cx, cy, r, fx, fy, stops }) => (
  <defs>
    <radialGradient
      id={id}
      cx={cx}
      cy={cy}
      r={r}
      fx={fx}
      fy={fy}
      gradientUnits="userSpaceOnUse"
    >
      {stops}
    </radialGradient>
  </defs>
);

RadialGradient.propTypes = {
  id: PropTypes.string,
  cy: PropTypes.number,
  cx: PropTypes.number,
  r: PropTypes.number,
  fx: PropTypes.number,
  fy: PropTypes.number,
  stops: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

// If the user sets gradient by type
export default (props) => {
  const { stops, fill } = props;
  let theseStops = stops;
  // if the gradient does not have any children then
  // return, no work to be done
  if (!stops || stops.length === 0) {
    theseStops = createStops(fill);
  }
  if (props.type === 1) {
    return LinearGradient(Object.assign({}, props, { stops: theseStops }));
  }
  return RadialGradient(Object.assign({}, props, { stops: theseStops }));
};
