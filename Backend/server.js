// Import libraries
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

// reading flag from input
const {parseCliFlagValue} = require('./parse-cli');
const environment = parseCliFlagValue('env');

// allow set up environment in .env file
require('dotenv').config({path: `./.env.${environment}`}); 

// Express
const app = express();
const port = process.env.PORT || 5000;

// middle-ware
app.use(cors()); 
app.use(morgan('tiny'));
app.use(express.json()); // new express does not need bodyParser

// Mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => console.log('Healing spell successfully connected to Mongo Healing Power Source.'))
  .catch((error) => console.log(`Cannot link to Mongo Power Source. Heavenly Wrath: ${error}`));

// declaring routes
const doctorsRouter = require('./routes/doctors');
const storeRouter = require('./routes/store');
const bookingRouter = require('./routes/bookings');
const villagerRouter = require('./routes/villagers');
const homeRouter = require('./routes/home');

// Using routes
app.use('/', homeRouter);
app.use('/villagers', villagerRouter);
app.use('/bookings', bookingRouter);
app.use('/doctors', doctorsRouter);
app.use('/store', storeRouter);

// when leading to a non-existing route
app.use('*', (req, res) => res.status(404).json({ error: "Healing Spirit is not found here. Return, my friend." }))

app.listen(port, () => {
  console.log(`Village Doctor Server is running on port: ${port}`);
})