module.exports = (sequelize, DataTypes) => {
  const Examen = sequelize.define("Examen", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    tipo: DataTypes.STRING,
    fecha: DataTypes.DATEONLY,
  });
  return Examen;
};