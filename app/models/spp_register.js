module.exports = (sequelize, DataTypes) => {
  const Species_Register = sequelize.define("Species_Register", {
    species_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
  });

  Species_Register.associate = (models) =>{
    models.Species_Register.hasMany(models.Species_Pictures, { foreignKey: 'species_id', as: 'pictures' });
    models.Species_Register.hasMany(models.Species_Characteristics, { foreignKey: 'species_id', as: 'characteristics' });
    models.Species_Register.hasMany(models.Species_Autu, { foreignKey: 'species_id', as: 'autu' });

}
  return Species_Register;
};
