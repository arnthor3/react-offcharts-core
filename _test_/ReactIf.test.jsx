import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import ReactIf from '../src/Components/ReactIf';

describe('<ReactIf />', () => {
  it('should render when condition is true', () => {
    const Test = () => (
      <g />
    );
    const Component = mount(
      <ReactIf
        condition
      >
        <Test />
      </ReactIf>,
    );

    expect(Component.find(Test).length).toBe(1);

    const Component2 = mount(
      <ReactIf
        condition={false}
      >
        <Test />
      </ReactIf>,
    );
    expect(Component2.find(Test).length).toBe(0);
  });

  it('should set parentType', () => {
    const Test = () => (
      <h1 />
    );

    const wrapper = mount(
      <ReactIf
        condition
        el={<div />}
        copy
      >
        <Test />
      </ReactIf>,
    );

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find(Test).length).toBe(1);
  });

});
