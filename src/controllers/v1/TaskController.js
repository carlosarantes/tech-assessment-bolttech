class TaskController {

    async findAll(req, res) {
        try {
          
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async create(req, res) {
        try {
          
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }

    async findById(req, res) {
        try {
          
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

    async findByProjectId(req, res) {
        try {
          
        } catch (e) {
            const code = e.statusCode || 400;
            const message = e.message || "Something when wrong";
            return res.status(code).json({ message });
        }
    }
}

module.exports = new TaskController();