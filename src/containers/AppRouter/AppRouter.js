import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../Home/Home.js';
import RedirectPage from '../../components/Redirect/RedirectPage.js';
import Dashboard from '../Dashboard/Dashboard.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';

const AppRouter = props => {
    return(
        <BrowserRouter>
            <div className='main'>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/redirect' component={RedirectPage}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;