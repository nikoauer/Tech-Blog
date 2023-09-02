// send a fetch request to the back end for logging user out 
const logout = async () => {

    const reply = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    //if response is 200 then change document to home
    if (reply.ok) {
      document.location.replace('/');
    } else {
      alert(reply.statusText);
    }
  };
  
  //modifiy the event listener depending on the name of the button 
  document.querySelector('#logout').addEventListener('click', logout);