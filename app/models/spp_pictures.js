module.exports = (sequelize, DataTypes) => {
    const Species_Pictures = sequelize.define("Species_Pictures", {
      picture_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
img_url: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    });
  
    return Species_Pictures;
  };
  