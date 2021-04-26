module.exports = (sequelize, DataTypes) => {
  const Supervisor = sequelize.define("Supervisor", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombreCompleto: DataTypes.STRING,
    apellidoPaterno: DataTypes.STRING,
    apellidoMaterno: DataTypes.STRING,
    ci: DataTypes.STRING,
  });
  return Supervisor;
};
