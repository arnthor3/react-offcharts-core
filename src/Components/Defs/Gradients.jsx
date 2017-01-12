import React, { PropTypes } from 'react';

export const LinearGradient = ({ x1, x2, y1, y2, stops, gradientUnits }) => (
  <defs>
    <linearGradient
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


export const RadialGradient = ({ cx, cy, r, fx, fy, stops }) => (
  <defs>
    <radialGradient
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
  // if the gradient does not have any children then
  // return, no work to be done
  if (!props.stops || props.stops.length === 0) {
    return null;
  }
  if (props.type === 1) {
    return LinearGradient(props);
  }
  return RadialGradient(props);
};
