const express = require('express');
const path = require('path');
const router = express.Router();

// Configuración para servir archivos HTML

// Rutas para 'Otras_vistas'
router.get('/contratar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/contratarE.html'));
});

router.get('/despedir', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/despedir.html'));
});

router.get('/gerente', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/Gerente.html'));
});

router.get('/grafica', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/grafica.html'));
});

router.get('/historial_venta', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/historial_venta.html'));
});

router.get('/informes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/informes.html'));
});

router.get('/inicio_sesion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/inicio_sesion.html'));
});

router.get('/login_con_des', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/login_con_des.html'));
});

router.get('/login_despedir', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/login_despedir.html'));
});

router.get('/registrar_venta', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/registrar_venta.html'));
});

router.get('/reporte_inventario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/reporte_inventario.html'));
});

router.get('/reporte_ventas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/reporte_ventas.html'));
});

router.get('/ver_inventario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/ver_inventario.html'));
});

router.get('/ver_personal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Otras_vistas/ver_personal.html'));
});

// Rutas para 'Vistas_empleado'
router.get('/dash_board_venta', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/dash_board_venta.html'));
});

router.get('/db_conexion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/db_conexion.php'));
});

router.get('/form_apartar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/form_apartar.html'));
});

router.get('/form_vender', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/form_vender.html'));
});

router.get('/gerente_empleado', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/Gerente.html'));
});

router.get('/historial_ventas_empleado', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/Historial_ventas.html'));
});

router.get('/inicio_sesion_empleado', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/inicio_sesion.html'));
});

router.get('/mi_perfil', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/miperfil.html'));
});

router.get('/mi_perfil1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/miperfil1.html'));
});

router.get('/vendedor', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/Vendedor.html'));
});

router.get('/ver_venta', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/Vistas_empleado/ver_venta.html'));
});

module.exports = router;
