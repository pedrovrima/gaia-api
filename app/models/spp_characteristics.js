module.exports = (sequelize, DataTypes) => {
  const Species_Characteristics = sequelize.define("Species_Characteristics", {
    species_characteristics_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  });

  return Species_Characteristics;
};
