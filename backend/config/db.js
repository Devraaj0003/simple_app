const db = require('mysql2');

connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
});

connection.connect((err) => {
    if (err) {
        console.log('Error in connection...', err);
    }
    console.log('Connected to database...');
})

module.exports = connection;