module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Species_Autu', {
      species_autu_id: {
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
      species_id:{      
        type: DataTypes.INTEGER,
        references: {
          model: 'Species_Register', // name of Target model
          key: 'species_id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      quantity: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      unit: {
        allowNull: false,
        type: DataTypes.STRING,
      },

description: {
        allowNull: false,
        type: DataTypes.STRING},
injuries: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      notes: {
        allowNull: false,
        type: DataTypes.TEXT,
      },

      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      forwarding: {
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
    return queryInterface.dropTable('Species_Autu');
  }
};