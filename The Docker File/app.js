// create a simple express server

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
}
);

// Run the app by visiting http://localhost:3000/