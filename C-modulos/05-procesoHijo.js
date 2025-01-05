/*
Los procesos hijo son subprocesos que se pueden llamar desde otros pryectos o desde
el sistema opertaivo
*/

const {exec} = require('child_process')

// listar directorio
//command = 'ls -la';

// ejecutar el archivo de js de la consola (consola.js)
command = "node 'C-modulos/03-consola.js'"

exec(command, (err,stdout,sterr)=>{
	if(err){
		console.error(err);
		return false;
	}

	console.log(stdout)
})