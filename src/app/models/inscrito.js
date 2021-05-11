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
    categoriaExamen: DataTypes.STRING,
    tipoExamen: DataTypes.STRING,
    fechaUltimoExamen: DataTypes.DATE,
    edad: DataTypes.INTEGER,
    
  });
  return Inscrito;
};
