const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverconfig.js');
const apiRoutes = require('./routes/index.js')
// const userRepository = require('./repository/user_repository.js')


const app = express();

const prepareAndStartServer = async() => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);




    app.listen(PORT, async() => {
        console.log(`Server started on port ${PORT}`);

        // const repo = new userRepository();
        // const response =  await repo.getById(2);
        // console.log(response);
    });
};

prepareAndStartServer();
