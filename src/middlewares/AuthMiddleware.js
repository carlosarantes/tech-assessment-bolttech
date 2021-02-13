class AuthMiddleware {
    async validateBeforeCreate(req, res, next) {
        const { name, email, password } = req.body;
        const errors = [];

        if (!name || name.length < 3) {
            errors.push("Please, provide a valid name (At least 3 characters).");
        }

        if (!email || email.length < 8) {
            errors.push("Please, provide a valid email (At least 8 characters).");
        }

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)) {
            errors.push("The e-mail provided is invalid.");
        }

        if(!password ||  (password.length < 8 || password.length > 18)) {
            errors.push("Please provide an valid password (Between 8 and 18 characters).")
        }

        if (errors.length > 0) {
            return res.status(422).json({ errors });
        }

        return next();
    }

    async validateBeforeLogin (req, res, next) {
        const { email, password } = req.body;
        const errors = [];

        if (!email || email.length < 8) {
            errors.push("Please, provide a valid email (At least 8 characters).");
        }

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)) {
            errors.push("The e-mail provided is invalid.");
        }

        if(!password ||  (password.length < 8 || password.length > 18)) {
            errors.push("Please provide an valid password (Between 8 and 18 characters).")
        }

        if (errors.length > 0) {
            return res.status(422).json({ errors });
        }

        return next();
    }
}

module.exports = new AuthMiddleware();