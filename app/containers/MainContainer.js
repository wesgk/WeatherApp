var React = require('react');
var styles = require('../styles');
var HeaderMenuContainer = require('./HeaderMenuContainer');

function MainContainer (props) {
  return ( 
    <div className='jumbotron col-sm-12 text-center' styles={styles.transparentBg}>
      <div>
        {props.children}
      </div>
    </div>
  )
}

module.exports = MainContainer;