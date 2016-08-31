var React = require('react');
var PropTypes = React.PropTypes;
// var MainContainer= require('../containers/MainContainer');
var SingleDay= require('../components/SingleDay');
var mapItemWrapperStyle = {
	display:'flex',
	justifyContent:'space-between',
	alignItems:'center',
	flexDirection:'row',
	flexWrap:'wrap',
	maxWidth:'1200px',
	margin:'50px auto',
}

function Puke (obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function MultiDay (props) {
	console.log('MultiDay list: ', props);
	console.log('Day 1: ', props.weather[0]);
  return (
  	<div>
  		<h2>{props.city}</h2>
  		
  		<p>Select a day</p>
	  	<div className="days" style={mapItemWrapperStyle}>
	  		{props.weather[0] && <SingleDay city={props.city} weather={props.weather[0]} id="0" />}
	  		{props.weather[1] && <SingleDay city={props.city} weather={props.weather[1]} id="0" />}
	  		{props.weather[2] && <SingleDay city={props.city} weather={props.weather[2]} id="0" />}
	  		{props.weather[3] && <SingleDay city={props.city} weather={props.weather[3]} id="0" />}
	  		{props.weather[4] && <SingleDay city={props.city} weather={props.weather[4]} id="0" />}
	  	</div>
	  </div>
  )
}

MultiDay.propTypes = {
  /*day1Date: PropTypes.string,
  day2Date: PropTypes.string,
  day3Date: PropTypes.string,
  day4Date: PropTypes.string,
  day5Date: PropTypes.string,*/
  coord: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  weather: PropTypes.array.isRequired,
}

module.exports = MultiDay;