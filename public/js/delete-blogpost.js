document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', handleDelete);
    });
});

//this function deletes the blogpost
async function handleDelete(event) {
    try {
        const postId = event.target.dataset.postid;

        // find the respective blogpost id and then send that to the back end to delete 
        const response = await fetch('/api/dashboard/delete-post', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Blogpost_id: postId })
        });

        //if response then remove from the display
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