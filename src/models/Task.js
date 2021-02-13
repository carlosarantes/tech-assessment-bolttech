const { Model, DataTypes } = require("sequelize");

class Task extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
            finished_at : DataTypes.DATE
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Project, { foreignKey: 'project_id' , as: 'project' })
    }
}

module.exports = Task;