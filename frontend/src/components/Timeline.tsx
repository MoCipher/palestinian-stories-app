import React, { useEffect, useState } from 'react';

const Timeline = () => {
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
        <div className="timeline">
            <h2>Stories Timeline</h2>
            {stories.length === 0 ? (
                <p>No stories available.</p>
            ) : (
                stories.map((story) => (
                    <div key={story.id} className="story">
                        <h3>{story.title}</h3>
                        <p>{story.content}</p>
                        {story.media && (
                            <div className="media">
                                {story.media.photos && story.media.photos.map((photo, index) => (
                                    <img key={index} src={photo} alt={`Story photo ${index + 1}`} />
                                ))}
                                {story.media.videos && story.media.videos.map((video, index) => (
                                    <video key={index} controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ))}
                            </div>
                        )}
                        <p className="timestamp">{new Date(story.timestamp).toLocaleString()}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Timeline;