var React = require('react');
var PropTypes = React.PropTypes;
var HeaderMenu = require('../components/HeaderMenu');

var HeaderMenuContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
        city: this.props.city,
        updatedCity: '',  
    };
  },
  handleSubmitCity: function (e) {
    e.preventDefault();
    this.setState({ city: this.state.updatedCity });
    this.context.router.push({
      pathname: '/forecast/' + this.state.updatedCity,
      query: {
        city: this.state.updatedCity
      }
    })
    this.props.handleUpdateState(this.state.updatedCity);
  },
  handleUpdateCity: function (event) {
    this.setState({
      updatedCity: event.target.value
    })
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