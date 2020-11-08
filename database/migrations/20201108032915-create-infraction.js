module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Infractions', {
      infraction_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      aut_id:{      
        type: DataTypes.INTEGER,
        references: {
          model: 'Autu', // name of Target model
          key: 'aut_id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Autu');
  }
};