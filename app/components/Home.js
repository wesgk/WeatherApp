var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer');

function Home () {
  return (
    <MainContainer>
      <h1>Weather App</h1>
      <p className='lead'>Get your short range daily forecast</p>
      <label for='city'>City</label>
      <input name='city' placeholder='Enter city' />
      <Link to='/city'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainContainer>
  )
}

module.exports = Home;