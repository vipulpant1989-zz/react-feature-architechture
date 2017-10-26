import React, {Component, PropTypes} from 'react';
import './index.scss';
import {login} from './Actions';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {

   return {
     userLogin :()=>{
       dispatch(login('vipul' , 'abcbsdadeade'));
     }
   };
};

class Login extends Component{

   render(){
     return(
       <div className="main-wrapper">
        <div className="column-wrapper">
             <h1>Welcome to feature based architecture</h1>
             <span className="field-text-wrapper">
               <label>Username : </label>
               <input type="text" name="username" className="field-text"/>
             </span>
             <span className="field-text-wrapper">
               <label>Password : </label>
               <input type="password" name="password" className="field-text"/>
             </span>
             <span className="btn-wrapper">
               <button className="btn" onClick={this.props.userLogin.bind(this)}>SUBMIT</button>
             </span>
         </div>
       </div>
     );
   }
}

export default connect(null, mapDispatchToProps)(Login);