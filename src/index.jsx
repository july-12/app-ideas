import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home';
import Demo from './demo';

import './index.less';

const container = document.getElementById('app');

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/:level/:demoId">
                    <Demo />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

render(<App />, container);
