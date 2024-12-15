const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const UserRoutes = require('./routes/UserRoutes')


const app = express();
const port = 4000;


app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/user', UserRoutes);

// app.post('/auth/register', (req, res) => {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//         return res.status(400).json({ message: 'All fields are required' });
//     }
//     const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
//     db.query(query, [name, email, password], (err, results) => {
//         if (err) {
//             console.error(err); return
//             res.status(500).json({ message: 'Database error' });
//         }
//         res.status(201).json({ message: 'User registered successfully!' });
//     });
// });



app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

