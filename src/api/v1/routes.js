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

routes.get('/users/:id/projects', UserController.findProjectsByUserId);

routes.get('/projects', ProjectController.findAll);
routes.post('/projects', ProjectMiddleware.validateBeforeSave, ProjectController.create);
routes.get('/projects/:id', ProjectController.findById);
routes.get('/projects/:id/tasks', ProjectController.findTaskByProjectId);
routes.put('/projects/:id', ProjectMiddleware.validateBeforeSave, ProjectController.update);
routes.delete('/projects/:id', ProjectController.delete);

routes.get('/tasks', TaskController.findAll);
routes.post('/tasks', TaskMiddleware.validateBeforeSave, TaskController.create);
routes.get('/tasks/:id', TaskController.findById);
routes.put('/tasks/:id', TaskMiddleware.validateBeforeSave, TaskController.update);
routes.patch('/tasks/:id', TaskMiddleware.validateBeforeFinish, TaskController.finish);
routes.delete('/tasks/:id', TaskController.delete);

module.exports = routes;