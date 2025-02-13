# reactjs-tabbedpane-component

> A tabbed pane component using React.js

[![NPM](https://img.shields.io/npm/v/reactjs-tabbedpane-component.svg)](https://www.npmjs.com/package/reactjs-tabbedpane-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-tabbedpane-component
```

## Usage

```jsx
import React, { Component } from 'react'

import TabbedPane from 'reactjs-tabbedpane-component'
import 'reactjs-tabbedpane-component/dist/index.css'

const contentData = {
  contents: [
    {
      subject: 'Overview',
      text: 'This is content of Overview'
    },
    {
      subject: 'Assumptions',
      text: '<ul><li>Assumption 1</li><li>Assumption 2</li><li>Assumption 3</li><li>Assumption 4</li></ul>'
    },
    {
      subject: 'Technical Design',
      text: 'This is content of Technical Design'
    }
  ]
}

class Example extends Component {
  render() {
    return <TabbedPane data={contentData} />
  }
}
```

![Example Image 1](example/images/example1.png)

![Example Image 2](example/images/example2.png)

## API

`<TabbedPane>`

### props

* *data*: JSON defining the tabs.  HTML tags are supported.

## License

MIT © [adafycheng](https://github.com/adafycheng)
