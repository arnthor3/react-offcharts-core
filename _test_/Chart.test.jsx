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
    // try to resize jsdom
    expect(Component2.find(Test).length).toBe(0);

    window.dispatchEvent(new Event('resize'));

    expect(Component2.find(Test).length).toBe(0);
    // fail to resize jsdom
    Chart.prototype.onResize.restore();
    expect(spyOne.callCount).toBe(3);
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

  it('should remove resize on unmount', () => {
    const spyOne = sinon.spy(Chart.prototype, 'componentWillUnmount');
    const Test = () => (
      <g />
    );
    const Component = mount(
      <Chart
        responsive
      >
        <div />
      </Chart>,
    );
    Component.unmount();
    // should render if width or heigth was set
    expect(spyOne.callCount).toBe(1);
  });

});
