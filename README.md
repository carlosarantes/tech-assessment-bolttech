docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql:5.7



yarn sequelize db:create

yarn sequelize migration:create --name=create-users

yarn sequelize db:migrate
npx sequelize db:migrate

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































 


/*
        routes.post('/users/registration', AuthMiddleware.validateBeforeCreate, AuthController.register);
        routes.post('/users/login', AuthMiddleware.validateBeforeLogin, AuthController.authenticate)
  

         
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