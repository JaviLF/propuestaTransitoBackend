'use strict';

class InscritoDTO{
	constructor(Inscrito){
		this.apellidoPaterno = Inscrito.apellidoPaterno;
		this.apellidoMaterno = Inscrito.apellidoMaterno;
		this.nombreCompleto = Inscrito.nombreCompleto;
		this.ci = Inscrito.ci;
	}

	getInscritoDTO(){
		return this.InscritoDTO;
	}
}

module.exports=InscritoDTO;