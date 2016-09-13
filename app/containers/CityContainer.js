var React = require('react');
var City = require('../components/City');
var HeaderMenuContainer = require('./HeaderMenuContainer');

var CityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function (e) {
    e.preventDefault();

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
  },
  render: function () {
    return (
      <City
          onUpdateCity={this.handleUpdateCity}
          onSubmitCity={this.handleSubmitCity}
        />
    )
  }
});

module.exports = CityContainer;