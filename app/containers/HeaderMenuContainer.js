var React = require('react');
var PropTypes = React.PropTypes;
var HeaderMenu = require('../components/HeaderMenu');

var HeaderMenuContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
        city: '',
        updatedCity: '',  
    };
  },
  handleSubmitCity: function (e) {
    e.preventDefault();
    console.log('handleSubmitCity');

    this.setState({ city: this.state.updatedCity });
    this.context.router.push({
      pathname: '/forecast/' + this.state.updatedCity,
      query: {
        city: this.state.updatedCity
      }
    })
    this.forceUpdate();
  },
  handleUpdateCity: function (event) {
    this.setState({
      updatedCity: event.target.value
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