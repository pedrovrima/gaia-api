module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Autu", {
      aut_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      latitude: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      longitude: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      declared_origin: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      possibly_international: {
        allowNull: false,
        type: DataTypes.TINYINT,
      },
      vehicle: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      organization: {
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
    return queryInterface.dropTable("Autu");
  },
};
