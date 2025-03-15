const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverconfig.js');
const apiRoutes = require('./routes/index.js')


const app = express();

const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);


    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
};

prepareAndStartServer();
