module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Species_Pictures', {
      picture_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
     
img_url: {        allowNull: false,
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
    return queryInterface.dropTable('Species_Pictures');
  }
};