module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Species_Register", {
      species_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      port_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      species: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      genus: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      family: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      order: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      class: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phylo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      kingdom: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      iucn: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cites: {
        allowNull: false,
        type: DataTypes.TINYINT,
      },
      map_pic: {
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
    return queryInterface.dropTable("Species_Register");
  },
};
