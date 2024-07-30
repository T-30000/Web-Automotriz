const db = require('./dbController'); // Asegúrate de tener configurada tu conexión a la base de datos

// Manejar la transacción para registrar un nuevo empleado
const handleRegistrarNuevoEmpleado = async (req, res) => {
    const {
        nombre, apellido, telefono, email, direccion, fecha_contrato,
        numero_seguro, puesto, sueldo_base, descuentos, comision,
        prestacion, capacitacion, prestamo, contrasena, estado
    } = req.body;

    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        await connection.query('CALL RegistrarNuevoEmpleado(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            nombre, apellido, telefono, email, direccion, fecha_contrato,
            numero_seguro, puesto, sueldo_base, descuentos, comision,
            prestacion, capacitacion, prestamo, contrasena, estado
        ]);

        await connection.commit();
        res.status(200).json({ message: 'Nuevo empleado registrado correctamente.' });
    } catch (error) {
        await connection.rollback();
        console.error('Error al registrar nuevo empleado:', error);
        res.status(500).json({ error: 'Error interno al registrar nuevo empleado.' });
    } finally {
        connection.release();
    }
};

// Manejar la transacción para aprobar la contratación de un empleado
const handleAprobarContratacionEmpleado = async (req, res) => {
    const { empleado_id } = req.body;

    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        await connection.query('CALL AprobarContratacionEmpleado(?)', [empleado_id]);

        await connection.commit();
        res.status(200).json({ message: 'Contratación de empleado aprobada correctamente.' });
    } catch (error) {
        await connection.rollback();
        console.error('Error al aprobar contratación de empleado:', error);
        res.status(500).json({ error: 'Error interno al aprobar contratación de empleado.' });
    } finally {
        connection.release();
    }
};

// Manejar la transacción para registrar la renuncia de un empleado
const handleRegistrarRenunciaEmpleado = async (req, res) => {
    const { empleado_id } = req.body;

    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        await connection.query('CALL RegistrarRenunciaEmpleado(?)', [empleado_id]);

        await connection.commit();
        res.status(200).json({ message: 'Renuncia de empleado registrada correctamente.' });
    } catch (error) {
        await connection.rollback();
        console.error('Error al registrar renuncia de empleado:', error);
        res.status(500).json({ error: 'Error interno al registrar renuncia de empleado.' });
    } finally {
        connection.release();
    }
};

// Manejar la transacción para despedir un empleado
const handleDespedirEmpleado = async (req, res) => {
    const { empleado_id } = req.body;

    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        await connection.query('CALL DespedirEmpleado(?)', [empleado_id]);

        await connection.commit();
        res.status(200).json({ message: 'Empleado despedido correctamente.' });
    } catch (error) {
        await connection.rollback();
        console.error('Error al despedir empleado:', error);
        res.status(500).json({ error: 'Error interno al despedir empleado.' });
    } finally {
        connection.release();
    }
};

module.exports = {
    handleRegistrarNuevoEmpleado,
    handleAprobarContratacionEmpleado,
    handleRegistrarRenunciaEmpleado,
    handleDespedirEmpleado
};