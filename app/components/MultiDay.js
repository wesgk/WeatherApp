var React = require('react');
var PropTypes = React.PropTypes;
var MainContainer= require('../containers/MainContainer');
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
var mapItemStyle = {
	display:'flex',
	alignItems:'center',
	justifyContent:'center',
	flexDirection:'column',
	margin:'35px',
}

function Puke (obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

/*function Item (obj) {
	return (
		<div>
		{obj.map(function(value, index){
			<div style={mapItemStyle}>
		    	<div>
		    		
		    		Item
		    	</div>
		    </div>
		})}
		</div>
	)
}*/
/*
function ObjItem (obj) {
	return (
		<div>
		{ for(var item in obj) {
			return(
			<div style={mapItemStyle}>
		    	<div>
		    		item
		    	</div>
		    </div>
		    )
		}}
		</div>
	)
}*/

function MultiDay (props) {
	console.log('MultiDay list: ', props);
  return (
  	<pre>MultiDay: {props.days}</pre>
  	/*<SingleDay data={props.data} />*/
  )
}

MultiDay.propTypes = {
  days: PropTypes.array.isRequired,
  forecast: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
}

module.exports = MultiDay;