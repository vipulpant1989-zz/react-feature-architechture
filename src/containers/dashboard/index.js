import React, {Component, PropTypes} from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

class Dashboard extends Component{

  render(){

    return(
      <div> Welcome to Dashboard </div>
    );
  }
}

export default withRouter(connect()(Dashboard));

