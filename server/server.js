const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();
require('./config/mongoose.config');
const port = process.env.PORT;
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
require('./routes/user.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );