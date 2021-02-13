const { Router } = require("express");

const AuthMiddleware = require("../../middlewares/AuthMiddleware");
const ProjectMiddleware = require("../../middlewares/ProjectMiddleware");
const TaskMiddleware = require("../../middlewares/TaskMiddleware");

const TaskController = require("../../controllers/v1/TaskController");
const ProjectController = require("../../controllers/v1/ProjectController");
const AuthController = require("../../controllers/v1/AuthController");
const UserController = require("../../controllers/v1/UserController");

const routes = Router();

routes.post('/users/registration', AuthMiddleware.validateBeforeCreate, AuthController.register);
routes.post('/users/login', AuthMiddleware.validateBeforeLogin, AuthController.authenticate);
routes.get('/users/:id/projects', AuthMiddleware.validateToken, UserController.findProjectsByUserId);

routes.get('/projects', AuthMiddleware.validateToken, ProjectController.findAll);
routes.post('/projects', AuthMiddleware.validateToken, ProjectMiddleware.validateBeforeSave, ProjectController.create);
routes.get('/projects/:id', AuthMiddleware.validateToken, ProjectController.findById);
routes.get('/projects/:id/tasks', AuthMiddleware.validateToken, ProjectController.findTaskByProjectId);
routes.put('/projects/:id', AuthMiddleware.validateToken, ProjectMiddleware.validateBeforeSave, ProjectController.update);
routes.delete('/projects/:id', AuthMiddleware.validateToken, ProjectController.delete);

routes.get('/tasks', AuthMiddleware.validateToken, TaskController.findAll);
routes.post('/tasks', AuthMiddleware.validateToken, TaskMiddleware.validateBeforeSave, TaskController.create);
routes.get('/tasks/:id', AuthMiddleware.validateToken, TaskController.findById);
routes.put('/tasks/:id', AuthMiddleware.validateToken, TaskMiddleware.validateBeforeSave, TaskController.update);
routes.patch('/tasks/:id/finish', AuthMiddleware.validateToken, TaskMiddleware.validateBeforeFinish, TaskController.finish);
routes.delete('/tasks/:id', AuthMiddleware.validateToken, TaskController.delete);

module.exports = routes;