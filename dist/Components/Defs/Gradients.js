'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadialGradient = exports.LinearGradient = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinearGradient = exports.LinearGradient = function LinearGradient(_ref) {
  var x1 = _ref.x1,
      x2 = _ref.x2,
      y1 = _ref.y1,
      y2 = _ref.y2,
      stops = _ref.stops,
      gradientUnits = _ref.gradientUnits;
  return _react2.default.createElement(
    'defs',
    null,
    _react2.default.createElement(
      'linearGradient',
      {
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2,
        gradientUnits: 'userSpaceOnUse'
      },
      stops
    )
  );
};

LinearGradient.propTypes = {
  x1: _react.PropTypes.string,
  x2: _react.PropTypes.string,
  y1: _react.PropTypes.string,
  y2: _react.PropTypes.string,
  gradientUnits: _react.PropTypes.string,
  stops: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
};

LinearGradient.defaultProps = {
  x1: 0,
  x2: 0,
  y1: 0,
  y2: 1,
  gradientUnits: 'userSpaceOnUse'
};

var RadialGradient = exports.RadialGradient = function RadialGradient(_ref2) {
  var cx = _ref2.cx,
      cy = _ref2.cy,
      r = _ref2.r,
      fx = _ref2.fx,
      fy = _ref2.fy,
      stops = _ref2.stops;
  return _react2.default.createElement(
    'defs',
    null,
    _react2.default.createElement(
      'radialGradient',
      {
        cx: cx,
        cy: cy,
        r: r,
        fx: fx,
        fy: fy,
        gradientUnits: 'userSpaceOnUse'
      },
      stops
    )
  );
};

RadialGradient.propTypes = {
  cy: _react.PropTypes.number,
  cx: _react.PropTypes.number,
  r: _react.PropTypes.number,
  fx: _react.PropTypes.number,
  fy: _react.PropTypes.number,
  stops: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
};

// If the user sets gradient by type

exports.default = function (props) {
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