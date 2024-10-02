// Function to simulate login and redirect to dashboard
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple check for example purposes
    if (username === "1" && password === "1") {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
}

// Function to simulate vote submission
function submitVote() {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (selectedCandidate) {
        alert(`You have successfully voted for ${selectedCandidate.value}`);
        // Redirect or perform further actions here
    } else {
        alert('Please select a candidate to vote for.');
    }
}
