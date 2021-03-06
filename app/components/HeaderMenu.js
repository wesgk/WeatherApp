var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Styles = require('../styles/global.css');

var HeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgba(252, 90, 44, 0.89)',
  color: '#fff',
  padding: '5px',
}
var H1Style = {
  margin: '10px',
}
var HeaderFormStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '300px',
  alignSelf: 'right',
}
var ButtonStyle = {
  margin: '10px',
}
var InputStyle = {
  color: '#000'
}

function HeaderMenu (props) {
  return (
    <div style={HeaderStyle}>
      <h1 style={H1Style}>
        <Link to='/'>Weather Time</Link>
      </h1>
      <form onSubmit={props.onSubmitCity} style={HeaderFormStyle}>
        <input name='city' id='headerCity' className='form-control' style={InputStyle} type='text' onChange={props.onUpdateCity} />
        <button type='submit' className={'btn btn-success '} style={ButtonStyle}>Get Weather</button>
      </form>
    </div>
  )
}

HeaderMenu.PropTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
}

module.exports = HeaderMenu;