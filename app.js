document.getElementById('smsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const to = document.getElementById('to').value;
    const message = document.getElementById('message').value;

    fetch('/send-sms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ to, message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = data.message;
    })
    .catch(error => {
        document.getElementById('response').textContent = 'Error sending SMS';
        console.error('Error:', error);
    });
});
