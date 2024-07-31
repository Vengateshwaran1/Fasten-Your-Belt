import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
    const history = useHistory();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace this with your own login logic
        if (user.email === 'test@example.com' && user.password === 'password') {
            setLoginUser({
                _id: '123456789',
                name: 'John Doe',
                email: 'test@example.com'
            });
            history.push('/');
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
            <img
                src="https://img.freepik.com/premium-photo/generative-ai-proposal-carpooling-ridesharing-cities_28914-8402.jpg"
                alt="Background"
                className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;