import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Project } from './components/Project'; 
import { Resume } from './components/Resume';
// import { Videos } from './components/Videos';
import { Contact } from './components/Contact';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Register from './components/Register';
import AddProject from './components/AddProject';
import './App.css';

const App = () => {
    useEffect(() => {
        const text = " Hello,I am Sohail-Hazary-Siam! Passionate a MERN stack Developer. "; // Text to be typed
        let index = 0;
        const speed = 200; // Typing speed in milliseconds

        function typeEffect() {
            document.getElementById("dynamic-text").textContent = text.slice(0, index);
            index++;

            if (index > text.length) {
                setTimeout(() => {
                    index = 0; // Restart typing effect without refreshing
                    typeEffect();
                }, 1000); // Wait for a second before restarting
            } else {
                setTimeout(typeEffect, speed);
            }
        }

        typeEffect(); // Call the function to start animation
    }, []);

    return (
        <Router>
            <nav className="main-nav">
                <img src="" alt="" />
                
                <div className="nav-links" style={{ textAlign: "left" }}>
                    <button style={{ backgroundColor: "#339933" }}> <Link to="/" style={{ color: "#FFFFFF", fontSize: "28px" }}>Home</Link></button>
                    <button style={{ backgroundColor: "#339933" }}><Link to="/skills" style={{ color: "#FFFFFF", fontSize: "28px" }}> Skills</Link></button>
                    <button style={{ backgroundColor: "#339933" }}><Link to="/project" style={{ color: "#FFFFFF", fontSize: "28px" }}> Project</Link></button>
                    <button style={{ backgroundColor: "#339933" }}><Link to="/resume" style={{ color: "#FFFFFF", fontSize: "28px" }}>Resume</Link></button>
                    {/* <button style={{ backgroundColor: "#339933" }}><Link to="/videos" style={{ color: "#FFFFFF", fontSize: "28px" }}>Videos</Link></button> */}
                    <button style={{ backgroundColor: "#339933" }}><Link to="/contact" style={{ color: "#FFFFFF", fontSize: "28px" }}>Contact</Link></button>
                    <button style={{ backgroundColor: "#339933" }}><Link to="/login" style={{ color: "#FFFFFF", fontSize: "28px" }}>Login</Link></button>
                    <button style={{ backgroundColor: "#339933" }}><Link to="/register" style={{ color: "#FFFFFF", fontSize: "28px" }}>Register</Link></button>
                    <button style={{ backgroundColor: "#339933" }}><Link to="/add-project" style={{ color: "#FFFFFF", fontSize: "28px" }}>Add Project</Link></button>
                   
                </div>
                
            </nav>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
           
          
            <h1 id="dynamic-text"></h1>
            
           
         
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/skills" component={Skills} />
                <Route path="/project" component={Project} /> 
                <Route path="/resume" component={Resume} />
                {/* <Route path="/videos" component={Videos} /> */}
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/register" component={Register} />
                <Route path="/add-project" component={AddProject} />
            </Switch>
        </Router>
    );
};

export default App;