const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverconfig.js');
const apiRoutes = require('./routes/index.js')
// const db = require('./models/index.js')


const app = express();

const prepareAndStartServer = async() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);




    app.listen(PORT, async() => {
        console.log(`Server started on port ${PORT}`);
        // if(process.env.DB_SYNC){
        //     db.sequelize.sync({alter:true});

        // }



    });
};

prepareAndStartServer();
