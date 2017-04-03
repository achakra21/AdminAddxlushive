import React, { Component } from 'react';





class Util extends Component {


  constructor(props) {
    super(props);
    
  }

  validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }



 
 
  render() {
    return (
      <div className="App">
        
       </div>
    );
  }

}

export default Util;
//exports.validateEmail = validateEmail;

