// controller/consultasController.js

const session = require("express-session");
const db = require('./dbController'); // Asegúrate de tener configurada tu conexión a la base de datos

const getEmpleadosVentas = (req, res) => {
    pool.query("SELECT * FROM Vista_EmpleadosVentas", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getAutosDisponibles = (req, res) => {
    pool.query("SELECT * FROM Vista_AutosDisponibles", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getClientesActivos = (req, res) => {
    pool.query("SELECT * FROM Vista_ClientesActivos", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getVentasPorMes = (req, res) => {
    pool.query("SELECT * FROM Vista_VentasPorMes", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getContratos = (req, res) => {
    pool.query("SELECT * FROM Vista_Contratos", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getEmpleadosPorZona = (req, res) => {
    pool.query("SELECT * FROM Empleados_Por_Zona", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getEmpleadosOrdenadosPorSueldo = (req, res) => {
    pool.query("SELECT * FROM Empleados_Ordenados_Por_Sueldo", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getEmpleadosRenunciados = (req, res) => {
    pool.query("SELECT * FROM Empleados_Renunciados", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getEmpleadosDespedidos = (req, res) => {
    pool.query("SELECT * FROM Empleados_Despedidos", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getEmpleadosPendientesContratacion = (req, res) => {
    pool.query("SELECT * FROM Empleados_Pendientes_Contratacion", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getAutosVendidosConServicio = (req, res) => {
    pool.query("SELECT * FROM Autos_Vendidos_Con_Servicio", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getAutosPorZona = (req, res) => {
    pool.query("SELECT * FROM Autos_Por_Zona", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getHistorialClientes = (req, res) => {
    pool.query("SELECT * FROM HistorialClientes", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getHistorialEmpleados = (req, res) => {
    pool.query("SELECT * FROM HistorialEmpleados", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getHistorialAutos = (req, res) => {
    pool.query("SELECT * FROM HistorialAutos", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};

module.exports = {
    getEmpleadosVentas,
    getAutosDisponibles,
    getClientesActivos,
    getVentasPorMes,
    getContratos,
    getEmpleadosPorZona,
    getEmpleadosOrdenadosPorSueldo,
    getEmpleadosRenunciados,
    getEmpleadosDespedidos,
    getEmpleadosPendientesContratacion,
    getAutosVendidosConServicio,
    getAutosPorZona,
    getHistorialClientes,
    getHistorialEmpleados,
    getHistorialAutos
};