var React = require('react');
var MultiDay = require('../components/MultiDay.js');
var staticHelpers = require('../utils/staticHelpers');

var MultiDayContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      days: [],
      forecast: [],
      city: '',
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    var obj = staticHelpers.getLongRangeForecast(query.city);
    console.log('componentDidMount ', obj);
    this.setState({
      // data: [obj.data.days[0], obj.data.days[1]], 
      days: obj.days, 
      forecast: obj.forecast, 
      city: obj.city
    })
    // get weather data here
    // load days var
  },
  handleSelectDay: function (e) {
    var day;
    // catch selected day, push router to individual day display
    day = e.target;
  },
  render: function () {
    return (
      <MultiDay 
        days={this.state.days}
        forecast={this.state.forecast}
        city={this.state.city} />
    )
  }
});

module.exports = MultiDayContainer;