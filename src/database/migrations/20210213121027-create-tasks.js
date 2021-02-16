'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.createTable('tasks', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey : true, 
        autoIncrement: true, 
        allowNull: false
      },
      description : {
        type: Sequelize.STRING,
        allowNull: false
      },
      project_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'projects',
          key : 'id'
        },
        onDelete: 'CASCADE'
      },
      finished_at : {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at : {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at : {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('tasks');
  }
};
