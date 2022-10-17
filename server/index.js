const apiRoutes = require('./api/api');
const express = require("express");
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

//Server start
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});