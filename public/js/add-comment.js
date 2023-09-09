document.getElementById('add-comment').addEventListener('submit', handleAddComment);

console.log(window.location)
var Blogpost_id = window.location.pathname.split("/")[2]

//this function adds comments by a fetch request to the back end
async function handleAddComment(event) {
    event.preventDefault();

    //confirm the input is there
    var description = document.getElementById('description').value.trim();

    // send description to backend 
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
            // if response ok then reload page to display new comment 
            window.location.reload();
            const data = await response.json();
            console.log(data)

        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    } else {
        // Handle case where description is empty
        console.error('Description cannot be empty');
    }
}
