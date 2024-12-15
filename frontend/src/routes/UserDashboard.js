import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDashboard = () => {

    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/'); // Redirect to login if no token
            return;
        }

        try {
            const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT
            setUserEmail(payload.email);
            setUserName(payload.name)
        } catch (err) {
            console.error('Invalid token:', err);
            localStorage.removeItem('token');
            navigate('/'); // Redirect to login if token is invalid
        }
    }, [navigate]);


    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };



    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-primary">User Dashboard</h1>
                <p>Email: {userEmail}</p>
                <p>Name: {userName}</p>
                <div>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>

        </div>
    );
};

export default UserDashboard;
