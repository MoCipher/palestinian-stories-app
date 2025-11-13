import React, { useEffect, useState } from 'react';
import AdminPanel from '../components/AdminPanel';

const AdminPage: React.FC = () => {
    const [stories, setStories] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchStories();
        fetchUsers();
    }, []);

    const fetchStories = async () => {
        const response = await fetch('/api/stories');
        const data = await response.json();
        setStories(data);
    };

    const fetchUsers = async () => {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
    };

    return (
        <div className="admin-page">
            <h1>Admin Dashboard</h1>
            <AdminPanel stories={stories} users={users} />
        </div>
    );
};

export default AdminPage;