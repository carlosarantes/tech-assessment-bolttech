const { Router } = require("express");

const AuthMiddleware = require("../../middlewares/AuthMiddleware");

const TaskController = require("../../controllers/v1/TaskController");
const ProjectController = require("../../controllers/v1/ProjectController");
const AuthController = require("../../controllers/v1/AuthController");

const routes = Router();

routes.post('/users/registration', AuthMiddleware.validateBeforeCreate, AuthController.register);
routes.post('/users/login', AuthMiddleware.validateBeforeLogin, AuthController.authenticate);

routes.get('/projects', ProjectController.findAll);
routes.post('/projects', ProjectController.create);
routes.get('/projects/:id', ProjectController.findById);
routes.put('/projects/:id', ProjectController.update);
routes.delete('/projects/:id', ProjectController.delete);
routes.get('/projects/by-user-id/:userId', ProjectController.findByUserId);

routes.get('/tasks', TaskController.findAll);
routes.post('/tasks', TaskController.create);
routes.get('/tasks/:id', TaskController.findById);
routes.put('/tasks/:id', TaskController.update);
routes.delete('/tasks/:id', TaskController.delete);
routes.get('/tasks/by-project-id/:projectId', TaskController.findByProjectId);

module.exports = routes;