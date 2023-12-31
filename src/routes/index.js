const { Router } = require("express");
const errorHandler = require("../controllers/errorHandler");

// Imports
const projectsRouter = require("./projects");
const projectManagersRouter = require("./projectManagers");
const assignmentsRouter = require("./assignments");

const router = Router();

// Routers
router.use("/projects", projectsRouter);
router.use("/projectmanagers", projectManagersRouter);
router.use("/assignments", assignmentsRouter);

// Middleware manejo de errores
router.use(errorHandler);

module.exports = router;