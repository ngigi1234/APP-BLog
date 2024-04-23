// Authentication.js
import React, { useState } from 'react';
import axios from 'axios';
import App from './App';

function Authentication({ onAuthenticated }) {
    const [userCredential, setUserCredential] = useState({});
    const [error, setError] = useState('');
    const [loginType, setLoginType] = useState('login');
    const [authenticated, setAuthenticated] = useState(false);

    function handleCredentials(e) {
        setError('');
        setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
    }

    async function handleLoginOrSignUp() {
        const { email, password } = userCredential;
        try {
            const response = await axios.post(`http://localhost:5000/${loginType}`, { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            setAuthenticated(true);
            onAuthenticated();
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <>
            {authenticated ? (
                <div>
                    {/* Content for authenticated user */}
                    <p>Authenticated</p>
                    <App/>
                </div>
            ) : (
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="w-full max-w-md">
                            <p className="text-center mb-4">To continue, create an account or login to an existing account.</p>
                            <div className="flex justify-center items-center mb-4">
                                <button type="button" className={`bg-gray-300 text-gray-700 px-4 py-2 rounded-l-md ${loginType === 'login' ? 'font-bold' : ''} mr-2 hover:bg-blue-500 hover:text-white`} onClick={() => setLoginType('login')}>
                                    Login
                                </button>
                                <button type="button" className={`bg-gray-300 text-gray-700 px-4 py-2 rounded-r-md ${loginType === 'signup' ? 'font-bold' : ''} ml-2 hover:bg-blue-500 hover:text-white`} onClick={() => setLoginType('signup')}>
                                    Signup
                                </button>
                            </div>
                            <p className="text-start">Email</p>
                            <div className="mb-4">
                                <input onChange={(e) => handleCredentials(e)} type="email" className="w-full px-3 py-2 leading-tight focus:outline-none focus:shadow-outline border rounded" id="email" placeholder="name@example.com" name="email" />
                            </div>
                            <p className="text-start">Password</p>
                            <div className="mb-4">
                                <input onChange={(e) => handleCredentials(e)} type="password" className="w-full px-3 py-2 leading-tight focus:outline-none focus:shadow-outline border rounded" id="password" placeholder="Password" name="password" />
                            </div>
                            <div className="flex justify-center items-center">
                                {loginType === 'login' ? (
                                    <button onClick={handleLoginOrSignUp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">Login</button>
                                ) : (
                                    <button onClick={handleLoginOrSignUp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">Signup</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {error && 
                <div className="text-red-500">
                    {error}
                </div>
            }
        </>
    );
}

export default Authentication;
