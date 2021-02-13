const Application = require("./bootstrap/Application");

Application.app.listen(3338, (err) => {
    if(err) process.exit(0);
    
    console.log(`Working on port ${3338}.`)
});