import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import ResizeObserver from 'resize-observer-polyfill';
import ReactIf from './ReactIf';
import cloneComponents from '../Utils/cloneChildren';

export const chartProps = {
  // enables listen to window width change and rerenders the chart
  // on resize
  responsive: PropTypes.bool,
  // if not responsive then user can set width and height
  width: PropTypes.number,
  height: PropTypes.number,
  id: PropTypes.string,
  className: PropTypes.string,
};


export default class Chart extends Component {
  static propTypes = chartProps;
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      height: null,
    };
    /*
      if user wants to rerender for all resize events then store the function
      as this.resize and throttle it so it does not refire many times during resize
    */
    if (this.props.responsive === true) {
      this.onResize = this.onResize.bind(this);
    }
  }

  componentDidMount() {
    if (this.props.responsive === true) {
      this.ro = new ResizeObserver((ent, obs) => {
        this.onResize();
      });
      this.ro.observe(this.chart);
    }
    this.onResize();
  }
  /*
    unregister on unmount
   */
  componentWillUnmount() {
    if (this.ro) {
      this.ro.disconnect();
    }
  }

  onResize() {
    if (this.props.responsive) {
      const dimension = this.chart.getBoundingClientRect();
      this.setState({
        width: dimension.width,
        height: dimension.height,
      });
    } else {
      this.setState({
        width: this.props.width,
        height: this.props.height,
      });
    }
  }
  render() {
    // Copy the state to pass down to the children
    const obj = {
      width: this.state.width,
      height: this.state.height,
    };

    // make the chart take up the whole width and height of the parent if its responsive
    let style;
    if (this.props.responsive) {
      style = {
        width: '100%',
        height: '100%',
      };
    } else {
      style = {
        width: this.props.width,
        height: this.props.height,
      };
    }
    return (
      <div
        style={style}
        ref={(c) => { this.chart = c; }}
        id={this.props.id}
        className={this.props.className}
      >
        <ReactIf
          condition={
            this.state.height !== undefined &&
            this.state.height !== null &&
            this.state.height !== 0
          }
        >
          <svg width="100%" height="100%">
            {cloneComponents(this.props, obj)}
          </svg>
        </ReactIf>
      </div>
    );
  }
}
