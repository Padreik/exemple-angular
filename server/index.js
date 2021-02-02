const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const router = require('./routes/routes');
const cookieParser = require('cookie-parser');

require('./config/db');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(router);

app.listen(3000, () => {
    console.log('listening to port 3000');
});
