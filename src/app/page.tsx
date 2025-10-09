import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './login/page';
import DashboardPage from './dashboard/page';
import './globals.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/dashboard" component={DashboardPage} />
            </Switch>
        </Router>
    );
};

export default App;