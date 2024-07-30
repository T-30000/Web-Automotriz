const mysql = require('mysql2');

// Crear un pool de conexiones
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'dou.270905',
    database: 'automotriz',
    waitForConnections: true,
    connectionLimit: 10, // Ajusta según la carga esperada
    queueLimit: 0 // Sin límite de cola
});

// Promisify pool.query para usar async/await
const promisePool = pool.promise();

module.exports = promisePool;
