import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Chart from '../src/Components/Chart';

describe('<Chart />', () => {
  it('should call onResize on resize', () => {
    const spyOne = sinon.spy(Chart.prototype, 'onResize');
    const Test = () => (
      <g />
    );
    const Component = mount(
      <Chart
        width={300}
        height={500}
      >
        <Test />
      </Chart>,
    );
    // should render if width or heigth was set
    expect(Component.find(Test).length).toBe(1);

    const Component2 = mount(
      <Chart
        responsive
      >
        <Test />
      </Chart>,
    );
    expect(typeof Chart.prototype.onResize).toBe('function');
    // try to resize jsdom
    expect(Component2.find(Test).length).toBe(0);

    window.dispatchEvent(new Event('resize'));

    expect(Component2.find(Test).length).toBe(0);
    // fail to resize jsdom
    Chart.prototype.onResize.restore();
    expect(spyOne.callCount).toBe(2);
    Component2.unmount();
  });

  it('should render svg', () => {
    const Test = () => (
      <g />
    );

    const wrapper = mount(
      <Chart
        width={500}
        height={500}
      >
        <Test />
      </Chart>,
    );

    expect(wrapper.find('svg').length).toBe(1);
  });

  it('should render plain elements as well', () => {
    const wrapper = mount(
      <Chart
        width={500}
        height={500}
      >
        <g />
      </Chart>,
    );
    expect(wrapper.find('g').length).toBe(1);
    wrapper.unmount();
    expect(wrapper.find('g').length).toBe(0);
  });
});
