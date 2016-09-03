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
var IconStyle = {
  height: '130px'
}
var h2Style = {
  fontSize: '30px',
  fontWeight: '100',
  color: '#333'
}

function SingleDay (props) {
  return (
    <div className="day" style={mapItemStyle}>
      <Link to={'/forecast/detail/' + props.city + '/' + props.weather.index} style={LinkStyle}>
        <div><img src={'/dist/images/' + props.weather.icon + '.svg'} style={IconStyle} /></div>
        <h2 style={h2Style}>{props.weather.day}</h2>
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