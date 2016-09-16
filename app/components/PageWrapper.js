var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');
var HeaderMenu = require('./HeaderMenu');

function PageWrapper (props) {
  return (
    <div>
      <div className='jumbotron col-sm-12 text-center' styles={styles.transparentBg}>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

PageWrapper.PropTypes = {
}

module.exports = PageWrapper;