document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', handleDelete);
    });
});

async function handleDelete(event) {
    try {
        const postId = event.target.dataset.postid;

        const response = await fetch('/api/dashboard/delete-post', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Blogpost_id: postId })
        });

        if (response.ok) {
            event.target.parentElement.remove(); 
            console.log('Post deleted successfully');
        } else {
            throw new Error('Error deleting post');
        }
    } catch (error) {
        console.error(error);
    }
}