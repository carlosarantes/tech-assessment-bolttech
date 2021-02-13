docker run -e MYSQL_ROOT_PASSWORD=root mysql:5.7



yarn sequelize db:create

yarn sequelize migration:create --name=create-users

yarn sequelize db:migrate

yarn sequelize db:migrate:undo

users:
    name
    email
    password

projects:
    user_id
    name

tasks:
    description
    created_at
    finished_at
    project_id































        // routes.get('/projects/:id/tasks', ProjectController.findTaskByProjectId);



/*
        routes.post('/users/registration', AuthMiddleware.validateBeforeCreate, AuthController.register);
        routes.post('/users/login', AuthMiddleware.validateBeforeLogin, AuthController.authenticate)
        routes.get('/users/:id/projects', UserController.findProjectsByUserId);


        
        
        routes.get('/tasks', TaskController.findAll);
        routes.post('/tasks', TaskMiddleware.validateBeforeSave, TaskController.create);
        routes.get('/tasks/:id', TaskController.findById);
        routes.put('/tasks/:id', TaskMiddleware.validateBeforeSave, TaskController.update);
        routes.delete('/tasks/:id', TaskController.delete);


        routes.patch('/tasks/:id', TaskMiddleware.validateBeforeFinish, TaskController.finish);
        
  */      



//{
    //summary
    //description
    //get
    //put
    //post
    //delete
    //options
    //head
    //patch
    //trace
    //servers
    //parameters
//}