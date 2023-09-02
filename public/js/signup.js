// Signup variable
const signupFormHandler = async (event) => {
  event.preventDefault();

  //query selector information needs to be added
  const username = document.querySelector("#signupusername").value.trim();
  const email = document.querySelector("#signupemail").value.trim();
  const password = document.querySelector("#signuppassword").value.trim();

  // confirms that respective fields are filled in
  if (username && email && password) {
    // creates a fetch request
    const reply = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    //if response is succesful reroute the user to the home page
    if (reply.ok) {
      document.location.replace("/");
    } else {
      alert(reply.statusText);
    }
  }
};

// event listener for when form is submitted
document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);
