var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var mapItemStyle = {
  alignItems:'center',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  margin:'35px',
  textAlign:'center',
}

function SingleDay (props) {
  return (
    <div className="day" style={mapItemStyle}>
      <Link to={'/forecast/detail/' + props.city + '/' + props.weather.index}>
        <div><img src={'/dist/images/' + props.weather.icon + '.svg'} /></div>
        <div>{props.weather.day}</div>
        <div>{props.weather.description}</div>
      </Link>
    </div>
  )
}

SingleDay.PropTypes = {
  day: PropTypes.instanceOf(Date),
  description: PropTypes.string.isRequired,
  weather: PropTypes.shape({
    day: PropTypes.string,
    description: PropTypes.string,
    main: PropTypes.string,
    icon: PropTypes.string,
    main: PropTypes.string,
  })
}

module.exports = SingleDay;