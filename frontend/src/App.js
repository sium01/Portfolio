import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Project } from './components/Project'; 
import { Resume } from './components/Resume';
import { Videos } from './components/Videos';
import { Contact } from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import AddProject from './components/AddProject';
import './App.css';
const App = () => {
    return (
        <Router>
            <nav className="main-nav">
                <img src="" alt="" />
                <h1 className="brand" style={{ textAlign: "center", color: "rgb(255,0,0)", fontSize: "80px" }}>SOHAIL HAZARY SIAM</h1>
                <div className="nav-links" style={{ textAlign: "center" }}>
                    <button style={{ backgroundColor: "#00ff00" }}> <Link to="/" style={{ color: "black", fontSize: "28px" }}>Home</Link></button>
                    <button style={{ backgroundColor: "#00ff00" }}><Link to="/skills" style={{ color: "black", fontSize: "28px" }}> Skills</Link></button>
                    <button style={{ backgroundColor: "#00ff00" }}><Link to="/project" style={{ color: "black", fontSize: "28px" }}> Project</Link></button>
                    <button style={{ backgroundColor: "#00ff00" }}><Link to="/resume" style={{ color: "black", fontSize: "28px" }}>Resume</Link></button>
                    <button style={{ backgroundColor: "#00ff00" }}><Link to="/videos" style={{ color: "black", fontSize: "28px" }}>Videos</Link></button>
                    <button style={{ backgroundColor: "#00ff00" }}><Link to="/contact" style={{ color: "black", fontSize: "28px" }}>Contact</Link></button>
                    <button style={{ backgroundColor: "#00ff00" }}><Link to="/login" style={{ color: "black", fontSize: "28px" }}>Login</Link></button>
                    <button style={{ backgroundColor: "#00ff00" }}><Link to="/register" style={{ color: "black", fontSize: "28px" }}>Register</Link></button>
                    <button style={{ backgroundColor: "#00ff00" }}><Link to="/add-project" style={{ color: "black", fontSize: "28px" }}>Add Project</Link></button>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/skills" component={Skills} />
                <Route path="/project" component={Project} /> 
                <Route path="/resume" component={Resume} />
                <Route path="/videos" component={Videos} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/add-project" component={AddProject} />
            </Switch>
        </Router>
    );
};

export default App;