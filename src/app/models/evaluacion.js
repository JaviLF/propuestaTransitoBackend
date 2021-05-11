module.exports = (sequelize, DataTypes) => {
  const Evaluacion = sequelize.define("Evaluacion", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idInscrito: DataTypes.INTEGER,
		idEvaluador: DataTypes.INTEGER,
		fecha: DataTypes.DATEONLY,
		notaTeorico: DataTypes.INTEGER,
		notaPractico: DataTypes.INTEGER,
    sePresento: DataTypes.BOOLEAN
  });
	Evaluacion.associate = function(models) {
		Evaluacion.belongsTo(models.Inscrito, { foreignKey: 'idInscrito', as: 'inscrito' }),
		Evaluacion.belongsTo(models.Evaluador, { foreignKey: 'idEvaluador', as: 'evaluador' })
	};
  return Evaluacion;
};