const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static(__dirname));

app.get('/getPhrases', (req, res) => {
    fs.readFile('phrases.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            let phrases = data.trim().split('\n');
            phrases.sort(() => Math.random() - 0.5);  // Shuffle phrases each time
            res.json(phrases);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
