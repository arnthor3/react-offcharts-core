import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Shadow from '../src/Components/Defs/Shadow';

describe('<Shadow />', () => {
  it('should render', () => {
    const Component = mount(
      <Shadow />,
    );

    expect(Component.find('defs').length).toBe(1);
    expect(Component.find('feGaussianBlur').length).toBe(1);
  });
});
