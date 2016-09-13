var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('../containers/MainContainer');
var CityStyle = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
};
var InputStyle = {
  maxWidth: '300px'
};

function City (props) {
  return (
    <div style={CityStyle}>
      <h1>Weather App</h1>
      <p className='lead'>Get your short range daily forecast</p>
      <form onSubmit={props.onSubmitCity}>
        <div className='form-group'>
          <label for='city'>City</label>
          <input 
            className='form-control'
            name='city' 
            placeholder='Enter city' 
            onChange={props.onUpdateCity}
            type='text'
            value={props.city}
            style={InputStyle}
          />
        </div>
        <div className='form-group col-sm-4 col-sm-offset-4'>  
          <button 
            type='submit' 
            className='btn btn-lg btn-success'>
              Get Weather
          </button>
       </div>
      </form>
    </div>
  )
}

City.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
}

module.exports = City;