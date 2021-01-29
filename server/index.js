const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const router = require('./routes/routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
    console.log('listening to port 3000');
});
