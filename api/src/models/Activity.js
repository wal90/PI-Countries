const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
    type:DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        min : 1 ,
        max : 5
      },
      defaultValue : 1

    },
    duration:{
      type: DataTypes. STRING,
      
    },
    season:{

   type: DataTypes.STRING,
		allowNull: false
    }
  },
  {
    timestamps: false
  });
};
