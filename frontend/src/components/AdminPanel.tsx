import React, { useEffect, useState } from 'react';

const AdminPanel: React.FC = () => {
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

    const deleteStory = async (id: string) => {
        await fetch(`/api/stories/${id}`, {
            method: 'DELETE',
        });
        fetchStories();
    };

    const deleteUser = async (id: string) => {
        await fetch(`/api/users/${id}`, {
            method: 'DELETE',
        });
        fetchUsers();
    };

    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            <h2>Manage Stories</h2>
            <ul>
                {stories.map(story => (
                    <li key={story.id}>
                        <h3>{story.title}</h3>
                        <button onClick={() => deleteStory(story.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <h2>Manage Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h3>{user.username}</h3>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;