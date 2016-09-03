var React = require('react');
var PropTypes = React.PropTypes;

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

function HeaderMenu () {
  return (
    <div style={HeaderStyle}>
      <h1 style={H1Style}>Weather Time</h1>
      <div className={HeaderFormStyle}>
        <input name='city' className='formControl' type='text' />
        <button type='button' className={'btn btn-success '} style={ButtonStyle}>Get Weather</button>
      </div>
    </div>
  )
}

HeaderMenu.PropTypes = {

}

module.exports = HeaderMenu;