const API_URL = "http://localhost:5001/api/posts";

export const blogApi = {
    async getAllPosts() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching blog data', error);
            throw error;
        }
    },

    async createPost(post) {
        const formattedPost = {
            title: post.title || '',
            location: post.location || '',
            dates: post.dates || '',
            description: post.description || '',
            img: {
                src: post.img.src || '',
                alt: post.img.alt || ''
            },
            mapUrl: post.mapUrl || ''
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formattedPost)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error creating post', error);
            throw error;
        }
    }
};