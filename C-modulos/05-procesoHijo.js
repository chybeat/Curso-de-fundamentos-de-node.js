/*
Los procesos hijo son subprocesos que se pueden llamar desde otros pryectos o desde
el sistema opertaivo
*/

const {exec, spawn} = require('child_process')
/****
 * Modo de ejecutar un proceso
 */

// listar directorio
//command = 'ls -la';

// ejecutar el archivo JavaScript de la consola (consola.js)
// command = "node 'C-modulos/03-consola.js'"

// exec(command, (err,stdout,sterr)=>{
// 	if(err){
// 		console.error(err);
// 		return false;
// 	}

// 	console.log(stdout)
// })


/****
 * Modo de ejecutar un proceso para realizar funciones mientras suceden cosas
 * durante la ejecución del proceso
 */

let proceso = spawn('ls',['-la'])// los argumentos del proceso se envían en un arreglo

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', function(dato){
	console.log('¿Está muerto?: ' + proceso.killed)
	console.log(dato.toString())
})

proceso.on('exit', function(){
	console.log(proceso.killed)
	console.log('El proceso terminó')
})