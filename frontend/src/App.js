import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Portfolio from './components/Portfolio';
import AddProject from './components/AddProject';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/add-project" component={AddProject} />
            </Switch>
        </Router>
    );
};

export default App;