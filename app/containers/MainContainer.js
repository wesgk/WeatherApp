var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var HeaderStyle = {
};
var MainStyle = {
  height: '92%'
};


function MainContainer (props) {
  console.log('props.children: ', props);
  return ( 
    <div>
      <div className="header" style={HeaderStyle}>
        {props.header ? props.header : ''}
      </div>
      <div className="main" style={MainStyle}>
        {props.main ? props.main : ''}
        {props.children ? props.children : ''}
      </div>
    </div>
  )
}

module.exports = MainContainer;