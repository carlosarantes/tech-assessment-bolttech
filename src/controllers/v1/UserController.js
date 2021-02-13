const ProjectService = require("../../services/v1/ProjectService");

class UserController {
    async findProjectsByUserId(req, res) {
        try {
            const { id } = req.params;
            const projects = await ProjectService.findByUserId(id);
            return res.json({ projects });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }
}

module.exports = new UserController();