const express = require('express');
const { getValueFromLookup } = require('./data/lookup');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/lookup/:key', (req, res) => {
    const key = req.params.key;
    const value = getValueFromLookup(key);

    if (value) {
        res.status(200).json({ key, value });
    } else {
        res.status(404).json({ error: 'Value not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});