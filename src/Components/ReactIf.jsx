import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cloneChildren from '../Utils/cloneChildren';
/*
  A template helper function that renders children if the condition is true
 */
const ReactIf = (props) => {
  if (!props.condition) {
    return null;
  }
  if (!props.copy) {
    return React.cloneElement(props.el, { children: props.children });
  }
  return React.cloneElement(props.el, { children: cloneChildren(props) });
};

ReactIf.defaultProps = {
  el: <span />,
};

ReactIf.PropTypes = {
  // a boolean condition if true then render
  condition: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  // The user can pass in any element type
  // that will act as the parent node
  el: PropTypes.node,
  copy: PropTypes.bool,
};

export default ReactIf;
