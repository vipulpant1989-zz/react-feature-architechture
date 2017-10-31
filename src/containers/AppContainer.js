import React,{Component,PropTypes} from 'react';
import {Provider,connect} from 'react-redux';
import getStore from '../Utils/getStore';
import createHistory from 'history/createBrowserHistory'
import { Router, Route } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import { ConnectedRouter, syncHistoryWithStore, routerReducer } from 'react-router-redux'
import history from '../Utils/getHistory';

class App extends Component{

    constructor(props){
      super(props);
      this.store = getStore();
    }

    componentDidMount(){
    }

    render(){
      return(
         <Provider store={this.store}>
            <Router history={history}>
              <div>
                <Route exact path="/" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
              </div>
            </Router>
         </Provider>
      );
    }

}

export default App;
