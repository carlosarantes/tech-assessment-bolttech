class ProjectMiddleware {
     async validateBeforeSave(req, res, next) {
        const { name } = req.body;
        const errors = [];

        if (!name || (name.length < 2 || name.length > 100)) {
            errors.push("Please, provide a valid project name (between 2 and 100 characters).")
        }

        if (errors.length) {
            return res.status(422).json({ errors });
        }
 
        return next();
     }
}

module.exports = new ProjectMiddleware();