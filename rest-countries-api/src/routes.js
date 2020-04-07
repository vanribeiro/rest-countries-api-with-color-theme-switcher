import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Country from './pages/Country';
import PageNotFound from './pages/404';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/country" exact component={Country} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;