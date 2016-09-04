var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');
var HeaderMenu = require('./HeaderMenu');

function PageWrapper (props) {
  return (
    <div>
      <HeaderMenu onSubmitCity={props.onSubmitCity} onUpdateCity={props.onUpdateCity}></HeaderMenu>
      <div className='jumbotron col-sm-12 text-center' styles={styles.transparentBg}>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

PageWrapper.PropTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
}

module.exports = PageWrapper;