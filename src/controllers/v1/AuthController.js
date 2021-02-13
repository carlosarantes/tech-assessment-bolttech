const UserService = require("../../services/v1/UserService");

class AuthController {
    async register(req, res) {
        try {
            const { user, token } = await UserService.register(req.body);
            return res.status(201).json({ message : "Registration completed successfully.", user, token })
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something went wrong";
            return res.status(code).json({ message });
        }
    }   

    async authenticate(req, res) {
        try {
            const { user, token } = await UserService.login(req.body);
            return res.json({ user, token })
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something went wrong";
            return res.status(code).json({ message });
        }
    }
}

module.exports = new AuthController();