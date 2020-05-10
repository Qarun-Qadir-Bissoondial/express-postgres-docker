const express = require('express');
const { Sequelize } = require('sequelize');

/*
    new Sequelize takes in database name (postgres), username (postgres) and password (password).
    It also takes in the host and the dialect of SQL (in this case, Postgres).

    If you want another database name, you'll need to go inside PgAdmin and create a new database.
    And then put that database name here

    const sequelize_connection = new Sequelize('new_database_name', 'postgres', 'password', {
        host: 'localhost',
        dialect: 'postgres'
    });
*/
const sequelize_connection = new Sequelize('postgres', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const app = express();
const port = process.env.PORT || 5000;

sequelize_connection.authenticate()
    .then(() => { console.log('Database connected!') })
    .catch(error => { console.error(error); });

app.listen(port, () => { console.log(`Listening on port ${port}`); });
