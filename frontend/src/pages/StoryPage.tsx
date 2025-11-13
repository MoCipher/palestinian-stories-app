import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StoryPage = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await fetch(`/api/stories/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStory(data);
            } catch (error) {
                console.error('Error fetching the story:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStory();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!story) {
        return <div>Story not found.</div>;
    }

    return (
        <div className="story-page">
            <h1>{story.title}</h1>
            <p>{story.content}</p>
            {story.media && story.media.map((mediaItem, index) => (
                <div key={index}>
                    {mediaItem.type === 'image' ? (
                        <img src={mediaItem.url} alt={`Story media ${index}`} />
                    ) : (
                        <video controls>
                            <source src={mediaItem.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            ))}
            <div className="timeline">
                <h2>Timeline</h2>
                {story.timeline.map((event, index) => (
                    <div key={index} className="timeline-event">
                        <p>{event.date}: {event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoryPage;