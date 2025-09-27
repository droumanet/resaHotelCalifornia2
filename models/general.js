const mysql = require('mysql2/promise');

const fs = require('fs');
const ini = require('ini');

const config = ini.parse(fs.readFileSync('./configDB.ini', 'utf-8'));
const dbConfig = {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    charset: config.charset
};

// Pool de connexions pour optimiser les performances
const pool = mysql.createPool({
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
