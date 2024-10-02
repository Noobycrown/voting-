document.getElementById('voteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked').value;
    alert(`You have voted for: ${selectedCandidate}`);
    // Add code to submit vote to blockchain here
});
