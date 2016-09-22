var React = require('react');
var Detail = require('../components/Detail.js');
var HeaderMenuContainer = require('./HeaderMenuContainer');
var dateHelpers = require('../utils/dateHelpers.js');
var weatherHelpers = require('../utils/weatherHelpers');

var DetailContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      city: '',
      day: '',
      description: '',
      icon: '',
      minTemp: 0,
      maxTemp: 0,
      humidity: 0,
    };
  },
  componentDidMount: function () {
    var query = this.props.routeParams;
    weatherHelpers.getLongRangeForecast(query.city)
      .then(function (obj) {
        var index = query.index;
        var day = dateHelpers.getDateStamp(index);
        var list = obj.data.list[index];
        this.setState({
          city: this.props.routeParams.city,
          day: day,
          description: list.weather[0].description,
          icon: list.weather[0].icon,
          minTemp: list.temp.min,
          maxTemp: list.temp.max,
          humidity: list.humidity,
        });
      }.bind(this))
  },
  render: function () {
    return (
      <Detail
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city} 
        day={this.state.day} 
        description={this.state.description}
        icon={this.state.icon}
        minTemp={this.state.minTemp}
        maxTemp={this.state.maxTemp} 
        humidity={this.state.humidity} />
    )
  }

});

module.exports = DetailContainer;