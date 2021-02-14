docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql:5.7


To run the application create the database iprojects if it does not exist with:
yarn sequelize db:create

Then run the migrations:
yarn sequelize db:migrate

Then run the project with: npm run start

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