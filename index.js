const express = require('express')
const app = express();

const connectDB = require('./db/connect')
const router = require('./routes/routes');
require('express-async-errors')
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 4000

var cors = require('cors')

app.use(cors());
cors({ credentials: true, origin: true });

app.get('/', (req, res) => {
    res.redirect('https://github.com/atulkumar1210/Insti-Assist-API');
})

app.use('/api', router);

const start = async () => {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    })
}
start();