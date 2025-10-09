import React, { useState } from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        // Handle login logic here
        console.log('Logging in with:', { email, password });
    };

    return (
        <div className="login-container">
            <h1>Login to AgriScheduler</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <Input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Button text="Login" type="submit" />
            </form>
        </div>
    );
};

export default LoginPage;