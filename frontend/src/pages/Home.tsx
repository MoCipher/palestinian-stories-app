import React, { useEffect, useState } from 'react';
import StoryCard from '../components/StoryCard';

const Home: React.FC = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch('/api/stories');
                const data = await response.json();
                setStories(data);
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };

        fetchStories();
    }, []);

    return (
        <div className="home-container">
            <h1>Palestinian Stories</h1>
            <p>Share your stories and connect with our culture.</p>
            <div className="stories-list">
                {stories.map((story) => (
                    <StoryCard key={story.id} story={story} />
                ))}
            </div>
        </div>
    );
};

export default Home;