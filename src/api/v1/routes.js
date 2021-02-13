const { Router } = require("express");
const TaskController = require("../../controllers/v1/TaskController");

const routes = Router();

routes.get('/projects', TaskController.findAll);
routes.post('/projects', TaskController.create);
routes.get('/projects/:id', TaskController.findById);
routes.put('/projects/:id', TaskController.update);
routes.delete('/projects/:id', TaskController.delete);
routes.get('/projects/by-user-id/:userId', TaskController.findByUserId);


routes.get('/tasks', TaskController.findAll);
routes.post('/tasks', TaskController.create);
routes.get('/tasks/:id', TaskController.findById);
routes.put('/tasks/:id', TaskController.update);
routes.delete('/tasks/:id', TaskController.delete);
routes.get('/tasks/by-project-id/:projectId', TaskController.findByProjectId);

module.exports = routes;