const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/litterposts',
//   { useNewUrlParser: true, useCreateIndex: true }
// );

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;

db.on('connected', function() {
    // throw new ERROR('party')
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
