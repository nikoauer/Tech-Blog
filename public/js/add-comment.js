document.getElementById('add-comment').addEventListener('submit', handleAddComment);

console.log(window.location)
var Blogpost_id = window.location.pathname.split("/")[2]

async function handleAddComment(event) {
    event.preventDefault();

    var description = document.getElementById('description').value.trim();

    if (description !== '') {
        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description: description, Blogpost_id }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            window.location.reload();
            const data = await response.json();
            console.log(data)
            // Handle successful response data
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    } else {
        // Handle case where description is empty
        console.error('Description cannot be empty');
    }
}
