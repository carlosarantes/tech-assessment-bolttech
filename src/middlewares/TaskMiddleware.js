class TaskMiddleware {
    async validateBeforeSave(req, res, next) {
       const { description } = req.body;
       const errors = [];
        
       if (!description || (description.length < 2 || description.length > 500)) {
            errors.push("Please, provide a valid description for the task (Between 2 and 500 characters).");
       }

       if (errors.length) {
           return res.status(422).json({ errors });
       }

       return next();
    }

    async validateBeforeFinish(req, res, next) {
        const { finished_at } = req.body;

        if(Date.parse(finished_at) < Date.now()) {
            return res.status(422).json({ 
                errors : [
                    "It's not possible to finish a task in the past."
                ] 
            });
        }
        
        return next();
    }
}

module.exports = new TaskMiddleware();