const Application = require("./bootstrap/Application");

const port = process.env.PORT || 3333;
Application.app.listen(port, (err) => {
    if(err) process.exit(0);
    console.log(`Working on port ${port}.`)
});