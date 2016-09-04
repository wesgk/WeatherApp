var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');

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

var HeaderMenu = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  componentWillReceiveProps: function () {
    console.log('componentWillReceiveProps');
  },
  handleSubmitCity: function (e) {
    e.preventDefault();

    this.context.router.push({
      pathname: '/forecast',
      query: {
        city: this.state.city
      }
    });
    this.forceUpdate();
  },
  handleUpdateCity: function (event) {
    console.log('updating city: ' + event.target.value);
    console.log('state city: ' + this.state.city);
    this.setState({
      city: event.target.value
    })
  },
 render: function (props) {
  // function HeaderMenu() {
  return (
    <div style={HeaderStyle}>
      <h1 style={H1Style}>Weather Time</h1>
      <div className={HeaderFormStyle}>
        <form onSubmit={this.handleSubmitCity}>
          <input name='city' id='headerCity' className='formControl' style={InputStyle} type='text' value={this.state.city} onChange={this.handleUpdateCity} />
          <button type='submit' className={'btn btn-success '} style={ButtonStyle}>Get Weather</button>
        </form>
      </div>
    </div>
  )
}
})

HeaderMenu.PropTypes = {

}

module.exports = HeaderMenu;