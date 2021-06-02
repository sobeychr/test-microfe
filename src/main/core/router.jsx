import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AboutPage, HomePage } from '@page';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;
