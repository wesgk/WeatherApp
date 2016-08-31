var React = require('react');
var PropTypes = React.PropTypes;

function Detail (props) {
  return (
    <div>
      <div>Weather icon</div>
      <div>{props.city}</div>
      <div>{props.day}</div>
      <div>{props.description}</div>
      <div>min temp: {props.minTemp}</div>
      <div>max temp: {props.maxTemp}</div>
      <div>humidity: {props.humidity}</div>
    </div>
  )
}

Detail.propTypes = {
  city: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  humidity: PropTypes.string.isRequired,
}

module.exports = Detail;