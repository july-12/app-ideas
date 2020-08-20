import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import List from './routers/list';
import Show from './routers/show';

import './index.less';

const container = document.getElementById('app');

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/:level/:demoTitle">
                    <Show />
                </Route>
                <Route path="/">
                    <List />
                </Route>
            </Switch>
        </Router>
    );
};

render(<App />, container);
