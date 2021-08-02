const express = require('express');

const app = express();

app.get('/', (_, res) => {
    res.send('Bye There!!');
});

app.listen(8080, () => console.log('listening on http://localhost:8080'));