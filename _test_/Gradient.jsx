import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Gradients from '../src/Components/Defs/Gradients';

describe('<Chart />', () => {
  it('should render Linear when not 2', () => {
    const Component = mount(
      <Gradients>
        <stop />
        <stop />
      </Gradients>,
    );

    expect(Component.find('linearGradient').length).toBe(1);
    expect(Component.find('stop').length).toBe(2);

    const Component2 = mount(
      <Gradients type={1}>
        <stop />
        <stop />
      </Gradients>,
    );

    expect(Component2.find('linearGradient').length).toBe(1);
    expect(Component2.find('stop').length).toBe(2);
  });

  it('should create stops from fill', () => {
    const Component = mount(
      <Gradients type={1} fill="#811" />,
    );

    expect(Component.find('stop').length).toBe(5);
  });
});
