const {createPool} = require('mysql');

const pool = createPool({
    port: 3306,
    host: "",
    user: "user",
    password: "",
    database: "",
    connectionLimit: 10
});

module.exports = pool;