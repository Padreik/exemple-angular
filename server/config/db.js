const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/exemplecours',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
