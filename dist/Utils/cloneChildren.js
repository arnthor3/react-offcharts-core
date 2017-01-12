'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
  props: The properties coming from the element that's cloning it's children
  obj: Object of values to be passed down to the children
*/
exports.default = function (props) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var children = props.children,
      rest = _objectWithoutProperties(props, ['children']);

  var newProps = Object.assign(rest, obj);
  // Clone the children and add props to components like data, width and heigth
  return _react.Children.map(children, function (child) {
    // only pass data into Components not native browser elements
    var isComponent = typeof child.type !== 'string';
    if (isComponent) {
      var childProps = Object.assign({}, newProps, child.props);
      return _react2.default.cloneElement(child,
      // user can overwrite props on children
      childProps);
    }
    return _react2.default.cloneElement(child);
  });
};