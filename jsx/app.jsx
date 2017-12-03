const ReactDOM = require('react-dom')
const React = require('react')
// console.log('start')
// ReactDOM.render(
//     <h1>Hello World!</h1>,
//     document.getElementById('content')

const Clock = require('./clock.jsx')

ReactDOM.render(
  <Clock />,
  document.getElementById('content')
)