module.exports = (sequelize, DataTypes) => {
    const Autu = sequelize.define("Autu", {
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
    
    });
  
    Autu.associate = (models) =>{
      models.Autu.hasMany(models.Species_Autu, { foreignKey: 'aut_id', as: 'species' });
      models.Autu.hasMany(models.Infractions, { foreignKey: 'aut_id', as: 'infractions' });
      models.Autu.hasMany(models.Individuals_Autu, { foreignKey: 'aut_id', as: 'individuals' });
  
  }
    return Autu;
  };
  