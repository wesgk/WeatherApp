var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var MainContainer = require('../containers/MainContainer');
var Home = require('../components/City');
var HeaderMenuContainer = require('../containers/HeaderMenuContainer');
var CityContainer = require('../containers/CityContainer');
var MultiDayContainer = require('../containers/MultiDayContainer');
var DetailContainer = require('../containers/DetailContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute components={ {header: HeaderMenuContainer, main: CityContainer} } />
      <Route path='forecast/:city' components={ { header: HeaderMenuContainer, main: MultiDayContainer } } ></Route>
      <Route path='forecast/detail/:city/:index' header='Multi-Day Forecast' components={ { header: HeaderMenuContainer, main: DetailContainer } } ></Route>
    </Route>
  </Router>
);

module.exports = routes;