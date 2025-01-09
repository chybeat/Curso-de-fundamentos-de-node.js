const p = require('process') // No es necesario llamar ya que es un modulo global


process.on('beforeExit', () =>{ // se ejecuta cuando el proceso actual va a termina
	console.log('El proceso va a terminar')
})

process.on('exit', () =>{ // se ejecuta cuando el proceso actual termina y ya ha salido del eventloop
	console.log('El proceso acabó')
	setTimeout(()=>{
		console.log('nunca se verá esta linea ya que setTimeout se ejecuta en otro hilo y se ha salido del event loop')
	},0)
})

// esto hara esperar 1 segundo para mostrarse y luego ejecutar los mensajes de cierre
setTimeout(()=>{
	console.log('Este mensaje se verá siempre')
},1000)

// cuando el proceso va a salir con error
process.on('uncaughtException', (err, origin)=>{
	console.error('Vaya se nos ha olvidado capturar un error (try/catch)')
	console.error(err);
	setTimeout(()=>{
		console.log('Esto viene desde las excepciones')
	},0)
})

funcionQuenoExiste() // Ejemplo para uncaughtException
//process.on('uncaughtRejection') // captura cuando una promesa tiene error

console.log('Esto si el error no se recoge no sale')