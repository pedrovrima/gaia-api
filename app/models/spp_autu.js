module.exports = (sequelize, DataTypes) => {
  const Species_Autu = sequelize.define("Species_Autu", {
    species_autu_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
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
      type: DataTypes.STRING,
    },
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
    alive:{
      allowNull:false,
      type:DataTypes.TINYINT
    },

    forwarding: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
  return Species_Autu;
};
