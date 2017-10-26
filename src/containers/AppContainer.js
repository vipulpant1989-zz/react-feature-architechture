import React,{Component,PropTypes} from 'react';
import {Provider,connect} from 'react-redux';
import getStore from '../Utils/getStore';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import Login from './login';


const history = createHistory();

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
            <ConnectedRouter history={history}>
              <div>
                <Route exact path="/" component={Login}/>
              </div>
            </ConnectedRouter>
         </Provider>
      );
    }

}

export default App;
