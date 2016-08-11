var React = require('react');
var PropTypes = React.PropTypes;

function SingleDay(props) {
  console.log('SingleDay props - days, ', props.data[0]);
  console.log('SingleDay props - forecast , ', props.data[0]);
  return (
    <pre>Day: {props.data}</pre>
    /*<div>Day: {props.data[0]}</div>*/
  )
}

SingleDay.PropTypes = {
  data: PropTypes.array.isRequired
}

module.exports = SingleDay;