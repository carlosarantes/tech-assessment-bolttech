const ProjectService = require("../../services/v1/ProjectService");

class ProjectController {

    async findAll(req, res) {
        try {
            const projects = await ProjectService.findAll();
            return res.json({ projects });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async create(req, res) {
        try {
            const project = await ProjectService.create(req.body);
            return res.status(201).json({ project });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const project = await ProjectService.findById(id);
            return res.json({ project });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async findByUserId(req, res) {
        try {
            const { user_id } = req.params;
            const project = await ProjectService.findByUserId(user_id);
            return res.json({ project });
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async update(req, res) {
        try {
            
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async delete(req, res) {
        try {
            
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }
}

module.exports = new ProjectController();