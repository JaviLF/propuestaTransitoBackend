module.exports = (sequelize, DataTypes) => {
  const Inscrito = sequelize.define("Inscrito", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ci: DataTypes.STRING,
    nombreCompleto: DataTypes.STRING,
    apellidoPaterno: DataTypes.STRING,
    apellidoMaterno: DataTypes.STRING,
    codigoInscripcion: DataTypes.STRING,
    intentos: DataTypes.INTEGER,
    
  });
  return Inscrito;
};
