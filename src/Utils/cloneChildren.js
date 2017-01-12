import React, { Children, cloneElement } from 'react';
/*
  props: The properties coming from the element that's cloning it's children
  obj: Object of values to be passed down to the children
*/
export default (props, obj = {}) => {
  const { children, ...rest } = props;
  const newProps = Object.assign(rest, obj);
    // Clone the children and add props to components like data, width and heigth
  return Children.map(children,
    (child) => {
      // only pass data into Components not native browser elements
      const isComponent = typeof child.type !== 'string';
      if (isComponent) {
        const childProps = Object.assign({}, newProps, child.props);
        return React.cloneElement(
          child,
          // user can overwrite props on children
          childProps,
        );
      }
      return React.cloneElement(child);
    });
};
