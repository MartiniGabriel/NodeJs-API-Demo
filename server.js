const express = require('express');
const app = express();

var bodyParser = require('body-parser');

global.__basedir = __dirname;

const db = require('./app/config/db.config.js');

const Customer = db.Customer;
let router = require('./app/routers/router.js');

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);

//Create a server
const server = app.listen(808, function(){
    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s", host, port);
})

db.sequelize.sync({ force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
    Customer.sync().then(() => {
        const customers = [
            { firstname: 'Jack', lastname: 'Smih',
        age: 23, address: '37 William S Canning Blvs'},
        { firstname: 'Adam', lastname: 'Johnson',
        age: 31, address: 'Fall River MA 2721. 121 Worcester Rd'},
        { firstname: 'Dana', lastname: 'Bay',
    age: 46, address: 'Farmingham MA 1701. 677 Tipany Blvd'},
        ]

        for(let i=0; i<cuustomers.length; i++){
            Customer.create(customers[i]);
        }
    })
});