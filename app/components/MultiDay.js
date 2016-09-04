var React = require('react');
var PropTypes = React.PropTypes;
var PageWrapper = require('./PageWrapper');
var SingleDay= require('../components/SingleDay');
var h1Style = {
  fontSize: '65px',
  color: '#333',
  fontWeight: '100',
  textAlign: 'center',
  marginTop: '50px',
  marginBottom: '30px',
};
var subheadStyle = {
  fontSize: '30px',
  color: '#333',
  fontWeight: '100',
}
var pageWrapper = {
  textAlign: 'center'
};
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
    <PageWrapper city={props.city} onSubmitCity={props.onSubmitCity} onUpdateCity={props.onUpdateCity} >

    	<div style={pageWrapper}>
    		<h1 style={h1Style}>{props.city}</h1>
    		<p style={subheadStyle}>Select a day</p>
  	  	<div className="days" style={mapItemWrapperStyle}>
  	  		{props.weather[0] && <SingleDay city={props.city} weather={props.weather[0]} id="0" />}
  	  		{props.weather[1] && <SingleDay city={props.city} weather={props.weather[1]} id="0" />}
  	  		{props.weather[2] && <SingleDay city={props.city} weather={props.weather[2]} id="0" />}
  	  		{props.weather[3] && <SingleDay city={props.city} weather={props.weather[3]} id="0" />}
  	  		{props.weather[4] && <SingleDay city={props.city} weather={props.weather[4]} id="0" />}
  	  	</div>
  	  </div>
    </PageWrapper>
  )
}

MultiDay.propTypes = {
  coord: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  weather: PropTypes.array.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
}

module.exports = MultiDay;