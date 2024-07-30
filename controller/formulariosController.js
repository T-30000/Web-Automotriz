// controller/formularios.js

const session = require('express-session');
const pool = require('./dbController'); // Asegúrate de tener configurada tu conexión a la base de datos


const handleRegistrarCredencial = (req, res) => {
    const { correo, contrasena } = req.body;

    const sql = `CALL RegistrarCredencial(?, ?)`;

    pool.query(sql, [correo, contrasena], (err, result) => {
        if (err) {
            console.error('Error al registrar credencial:', err);
            return res.status(500).json({ error: 'Error interno al registrar credencial.' });
        }
        console.log('Credencial registrada correctamente:', result);
        res.status(200).json({ message: 'Credencial registrada correctamente.' });
    });
};
module.exports = {
    handleRegistrarCredencial
};