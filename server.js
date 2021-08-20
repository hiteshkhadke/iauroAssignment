const express = require('express');
const app = express();
const cors = require('cors');
const Sequelize = require('sequelize');
const initDataBase = require('./sequelize/index');

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use('/api/users', require('./users/routes'));
app.use('/api/product', require('./product/routes'));

function initDB() {

    initDataBase.init();
}

initDB();

app.listen(3000, () => {
    console.log('server created');
});