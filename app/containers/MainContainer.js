var React = require('react');
var PropTypes = React.PropTypes;
var HeaderMenuContainer = require('./HeaderMenuContainer');
var styles = require('../styles');
var HeaderStyle = {
};
var MainStyle = {
  height: '92%'
};

var MainContainer = React.createClass({
  getInitialState() {
      return {
          city: ''  
      };
  },
  updateState: function(city) {
    console.log('setting city to : ' + city);
    this.setState({ city: city });
    this.render();
  },
  render: function () {
    return ( 
      <div>
        <HeaderMenuContainer parentStateCity={this.state.city} handleUpdateParentState={this.updateState}></HeaderMenuContainer>
        <div div className="main" style={MainStyle}>{React.cloneElement(this.props.children, { parentStateCity: this.state.city, handleUpdateParentState: this.updateState })}</div>
      </div>
    )
  }

});



module.exports = MainContainer;