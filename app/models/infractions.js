module.exports = (sequelize, DataTypes) => {
    const Infractions = sequelize.define("Infractions", {
      infractions_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

  
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
  

    });
    return Infractions;
  };
  