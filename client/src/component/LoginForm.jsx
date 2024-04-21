import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        axios.post('/login', { username, password })
            .then(response => {
                const token = response.data.token;
                // Store token in local storage
                localStorage.setItem('token', token);
                // Redirect to home page
                window.location.href = "/";
            })
            .catch(error => {
                setErrorMessage(error.response.data.message || "Login failed!");
            });
    };

    return (
        <div>
            <form>
                <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /> <br /><br />
                <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /> <br /><br />
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </div>
    );
}

export default LoginForm;

