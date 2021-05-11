module.exports = (sequelize, DataTypes) => {
  const Evaluador = sequelize.define("Evaluador", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ci: DataTypes.STRING,
    nombreCompleto: DataTypes.STRING,
    apellidoPaterno: DataTypes.STRING,
    apellidoMaterno: DataTypes.STRING,
    gradoPolicial: DataTypes.STRING,
    fechaAlta: DataTypes.DATE,
    fechaBaja: DataTypes.DATE,

  });
  return Evaluador;
};
