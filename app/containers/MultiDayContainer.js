var React = require('react');
var MultiDay = require('../components/MultiDay.js');
var HeaderMenuContainer = require('./HeaderMenuContainer');
var weatherHelpers = require('../utils/weatherHelpers');
var dateHelpers = require('../utils/dateHelpers.js');
var createFragment = require('react-addons-create-fragment');

var MultiDayContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getWeather: function (city) {
    console.log('some function');

    weatherHelpers.getLongRangeForecast(city)
      .then(function (obj) {
        var list = obj.data.list;
        var self = this;
        var weatherArray = [];
        console.log('getWeather: ', list);
        
        list.map(function(item, index){
          var weather = item.weather[0];
          weather.day = dateHelpers.getDateStamp(index);
          weather.index = index;
          weatherArray.push(weather);
          console.log('item ', self.state.weather[index]);
        });

        this.setState({ 
          coord: [obj.data.city['coord'].lat, obj.data.city['coord'].lon],
          city: obj.data.city['name'],
          weather: weatherArray,
        });
      }.bind(this))
  },
  getInitialState: function () {
    console.log('getInitialState');
    return {
      coord: [],
      city: this.props.parentStateCity,
      updatedCity: '',
      weather: [],
    }
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    console.log('componentDidMount');
    var query = this.props.location.query;
    this.getWeather(query.city);
  },
  componentWillReceiveProps: function (nextProps) {
    console.log('componentWillReceiveProps ', nextProps);
    this.getWeather(nextProps.parentStateCity);
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    var trueFalse = Boolean(nextProps.parentStateCity !== nextState.parentStateCity);
    console.log('shouldComponentUpdate ' + trueFalse);
    return nextProps.parentStateCity !== nextState.parentStateCity;
  },
  componentWillUpdate: function (nextProps, nextState) {
    console.log('componentWillUpdate');
  },
  componentDidUpdate: function (prevProps, prevState) {
    console.log('componentDidUpdate');
  },
  componentWillUnmount: function () {
    this.componentDidMount();
  },
  handleSelectDay: function (e) {
    var day;
    // catch selected day, push router to individual day display
    day = e.target;
  },
  render: function () {
    console.log('render');
    return (
      <MultiDay 
        coord={this.state.coord}
        city={this.state.city} 
        weather={this.state.weather} />
    )
  }
});

module.exports = MultiDayContainer;