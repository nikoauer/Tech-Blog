document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.update-button').forEach(button => {
      button.addEventListener('click', handleUpdate);
    });
  
    document.querySelectorAll('.cancel-button').forEach(button => {
      button.addEventListener('click', handleCancel);
    });
  });
  
  function handleUpdate(event) {
    const postId = event.target.dataset.postid;
    const postElement = event.target.parentElement;
    const updateForm = postElement.nextElementSibling;
    const updateTitleInput = updateForm.querySelector('.update-title');
    const updateDescriptionTextarea = updateForm.querySelector('.update-description');
    const saveButton = updateForm.querySelector('.save-button');
  
    // Populate input fields with current post content
    const currentTitle = postElement.querySelector('h2').textContent;

  
    updateTitleInput.value = currentTitle;
    updateDescriptionTextarea.value = '';
  
    // Display update form and hide post content
    postElement.style.display = 'none';
    updateForm.style.display = 'block';
  
    // Add event listener to save button
    saveButton.addEventListener('click', async () => {
      try {
        const updateTitle = updateTitleInput.value;
        const updateDescription = updateDescriptionTextarea.value;
  
        const response = await fetch(`/api/dashboard/update-post/${postId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: updateTitle, description: updateDescription })
        });
  
        if (response.ok) {
          console.log('Post updated successfully');
          window.location.reload();
        } else {
          throw new Error('Error updating post');
        }
      } catch (error) {
        console.error(error);
      }
    });
  }
  