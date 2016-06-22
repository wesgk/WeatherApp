var React = require('react');
// var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({

  contextTypes: {

  }, 
  getInitialState: function () {

  },
  handleUpdateUser: function (e) {

  },
  handleSubmitUser: function (e) {

  },
  render: function () {
    return (
      <div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
        <h1>Header</h1>
        <div className='col-sm-12'>
          <form>
             <div className='form-group'>
              <input 
                className='form-control'
                placeholder='Enter city'
                />
             </div>
             <div className='form-group'>
              <button 
                className='btn btn-block btn-success'
                type='submit'>
                Continue
              </button>
                />
             </div>
          </form>
        </div>
      </div>
    )
  }

});

module.exports = PromptContainer;