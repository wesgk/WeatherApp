var React = require('react');
var PropTypes = React.PropTypes;
var DetailTopStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '34px',
  fontWeight: '100'
}
var DetailStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '34px',
  fontWeight: '100',
  margin: '35px'
}
var pStyle = {
  margin: '0 0 10px',
  fontSize: '34px',
  fontWeight: '100',
  textAlign: 'center'
}
var IconStyle = {
  height: '130px'
}
var h2Style = {
  fontSize: '30px',
  fontWeight: '100',
  color: '#333'
}

function Detail (props) {
  console.log('props: ', props);
  return (
    <div>
      <div style={DetailStyle}>
        <div>
         {props.icon && <img src={'/dist/images/' + props.icon + '.svg'} style={IconStyle} />}
        </div>
        <h2 style={h2Style}>{props.day}</h2>
      </div>
      <div>
        <p style={pStyle}>{props.city}</p>
        <p style={pStyle}>{props.description}</p>
        <p style={pStyle}>min temp: {props.minTemp} &deg;C</p>
        <p style={pStyle}>max temp: {props.maxTemp} &deg;C</p>
        <p style={pStyle}>humidity: {props.humidity}</p>
      </div>
    </div>
  )
}

Detail.propTypes = {
  city: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
}

module.exports = Detail;