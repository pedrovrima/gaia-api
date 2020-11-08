module.exports = (sequelize, DataTypes) => {
    const Individuals_Autu = sequelize.define("Individuals_Autu", {
      individuals_autu_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
     
      
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
      },
  
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },  });
    return Individuals_Autu;
  };
  