const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Replace with your Twilio credentials
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = twilio(accountSid, authToken);

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/send-sms', (req, res) => {
    const { to, message } = req.body;

    client.messages.create({
        body: message,
        from: 'your_twilio_number',
        to: to
    })
    .then(message => {
        res.json({ message: 'SMS sent successfully' });
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to send SMS', error: error.message });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${3000}`);
});
