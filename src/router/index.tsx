import React , { Component, Fragment } from 'react';

import { createBrowserHistory } from "history";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


/** pages */
import Home from '../pages/home';
import Inbox from '../pages/messages';
import Settings from '../pages/settings';


const hist = createBrowserHistory();

class Routes extends Component {
    render(){
        return (
              <Fragment>
                       <Route exact  path="/" component={Home} />
                       <Route path="/settings" component={Settings} />
                       <Route path="/inbox" component={Inbox} />                       
               </Fragment>
            
        )
    }
}

export default Routes;