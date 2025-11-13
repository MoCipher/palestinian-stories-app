import React, { useState } from 'react';

const StoryForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [media, setMedia] = useState<File | null>(null);
    const [timeline, setTimeline] = useState<string[]>(['']);

    const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setMedia(event.target.files[0]);
        }
    };

    const handleTimelineChange = (index: number, value: string) => {
        const newTimeline = [...timeline];
        newTimeline[index] = value;
        setTimeline(newTimeline);
    };

    const addTimelineEvent = () => {
        setTimeline([...timeline, '']);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (media) {
            formData.append('media', media);
        }
        formData.append('timeline', JSON.stringify(timeline));

        try {
            const response = await fetch('/api/stories', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                // Handle successful submission
                alert('Story submitted successfully!');
                setTitle('');
                setContent('');
                setMedia(null);
                setTimeline(['']);
            } else {
                // Handle error
                alert('Failed to submit story.');
            }
        } catch (error) {
            console.error('Error submitting story:', error);
            alert('An error occurred while submitting the story.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Share Your Story</h2>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Media (Photo/Video):</label>
                <input type="file" accept="image/*,video/*" onChange={handleMediaChange} />
            </div>
            <div>
                <label>Timeline Events:</label>
                {timeline.map((event, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={event}
                            onChange={(e) => handleTimelineChange(index, e.target.value)}
                            placeholder={`Event ${index + 1}`}
                        />
                    </div>
                ))}
                <button type="button" onClick={addTimelineEvent}>
                    Add Timeline Event
                </button>
            </div>
            <button type="submit">Submit Story</button>
        </form>
    );
};

export default StoryForm;