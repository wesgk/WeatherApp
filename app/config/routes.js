var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/City');
var CityContainer = require('../containers/CityContainer');
var MultiDayContainer = require('../containers/MultiDayContainer');
var DetailContainer = require('../containers/DetailContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={CityContainer} />
      <Route path='forecast' header='Multi-Day Forecast' component={MultiDayContainer} />
      <Route path='forecast/detail/:city/:index' header='Multi-Day Forecast' component={DetailContainer} />
      <Route path='city' header='Single-Day Forecast' component={CityContainer} />
    </Route>
  </Router>
);

module.exports = routes;