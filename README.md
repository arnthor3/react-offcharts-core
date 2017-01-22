## React Offcharts-Core
[![Build Status](https://travis-ci.org/arnthor3/react-offcharts-core.svg?branch=master)](https://travis-ci.org/arnthor3/react-offcharts-core) [![Coverage Status](https://coveralls.io/repos/github/arnthor3/react-offcharts-core/badge.svg?branch=master)](https://coveralls.io/github/arnthor3/react-offcharts-core?branch=master)

A collection of util methods and helper components for React Offcharts.

### Usage
This is not usefull on it's own unless you want a responsive svg that sends down with and height on resize event.

```js
import Chart from 'react-offcharts-core/Components/Chart';

class Graph extends Component {
  ......
  render() {
    <Chart
      responsive
    >
      <SomeGraph someProps={...this.props}/>
    </Chart>
  }
}
```

SomeGraph will recieve the widht and heght on resize and on mount.


### Licence
MIT Licence. Copyright (c) 2017 Arnthor Agustsson.