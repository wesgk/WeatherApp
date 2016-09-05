var React = require('react');
var PropTypes = React.PropTypes;
var HeaderMenu = require('../components/HeaderMenu');

var HeaderMenuContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
        city: ''  
    };
  },
  handleSubmitCity: function (e) {
    e.preventDefault();
    console.log('handleSubmitCity');
    this.context.router.push({
      pathname: '/forecast/' + this.state.city,
      query: {
        city: this.state.city
      }
    })
  },
  handleUpdateCity: function (event) {
    this.setState({
      city: event.target.value
    })
    console.log('handleUpdateCity, ' + this.state.city);
  },
  render: function () {
    return (
      <HeaderMenu
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
      />
    )
  }
});

module.exports = HeaderMenuContainer;