'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cloneChildren = require('../Utils/cloneChildren');

var _cloneChildren2 = _interopRequireDefault(_cloneChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  A template helper function that renders children if the condition is true
 */
var ReactIf = function ReactIf(props) {
  if (!props.condition) {
    return null;
  }
  if (!props.copy) {
    return _react2.default.cloneElement(props.el, { children: props.children });
  }
  return _react2.default.cloneElement(props.el, { children: (0, _cloneChildren2.default)(props) });
};

ReactIf.defaultProps = {
  el: _react2.default.createElement('span', null)
};

ReactIf.PropTypes = {
  // a boolean condition if true then render
  condition: _react.PropTypes.bool,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  // The user can pass in any element type
  // that will act as the parent node
  el: _react.PropTypes.node,
  copy: _react.PropTypes.bool
};

exports.default = ReactIf;