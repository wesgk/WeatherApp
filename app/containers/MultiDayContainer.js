var React = require('react');
var MultiDay = require('../components/MultiDay.js');
var weatherHelpers = require('../utils/weatherHelpers');
var dateHelpers = require('../utils/dateHelpers.js');
var createFragment = require('react-addons-create-fragment');

var MultiDayContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      coord: [],
      city: '',
      updatedCity: '',
      weather: [],
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    weatherHelpers.getLongRangeForecast(query.city)
      .then(function (obj) {
        var list = obj.data.list;
        var self = this;
        var weatherArray = [];
        console.log('MultiDayContainer - componentDidMount.then(): ', list);
        
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
  shouldComponentUpdate: function () {
    // var query = this.props.location.query;
    console.log('in MultiDayContainer > shouldComponentUpdate: ' + this.state.city);
    return true;
  },
  componentWillReceiveProps: function (nextProps) {
    
  },
  handleSelectDay: function (e) {
    var day;
    // catch selected day, push router to individual day display
    day = e.target;
  },
  handleSubmitCity: function (e) {
    e.preventDefault();
    console.log('updated city: ', this.state.updatedCity);
    this.setState({ city: this.state.updatedCity });
    this.context.router.push({
      pathname: '/forecast/' + this.state.updatedCity,
      query: {
        city: this.state.updatedCity
      }
    })
  },
  handleUpdateCity: function (event) {
    this.setState({
      updatedCity: event.target.value
    })
  },
  render: function () {
    return (
      <MultiDay 
        coord={this.state.coord}
        city={this.state.city} 
        weather={this.state.weather} 
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity} />
    )
  }
});

module.exports = MultiDayContainer;