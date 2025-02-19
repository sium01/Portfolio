import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

 export const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
            localStorage.setItem('userInfo', JSON.stringify(data));
            setMessage('Login success!');
            setTimeout(() => {
                history.push('/portfolio');
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error(error);
            setMessage('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            <p>
                <a href="/forgot-password">Forgot Password?</a>
            </p>
        </div>
    );
};

