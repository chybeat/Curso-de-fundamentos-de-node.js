const fs = require('fs');

function leer(ruta,cb){
	fs.readFile(ruta, (err,data) =>{
		cb(data.toString())
	})
}

function escribir(ruta, contenido){
	fs.writeFile(ruta,contenido, (err,) =>{
		if (err){
			console.log("No he podido escribirlo", err)
		}else{
			console.log('Se ha escrito correctamente el archivo \'' + ruta + '\'')
		}
	});
}

function borrar(ruta,cb){
	fs.unlink(ruta,cb)
}

/*
Ejemplos

//escribir(__dirname + '/02-zz_archivo creado desde node.txt',"Soy un archivo nuevo creado desde node.js",console.log)
//leer(__dirname + '/02-zz_archivo de lectura.txt', console.log)
*/

borrar(__dirname + '/02-zz_archivo creado desde node.txt',console.log)
// Si el archivo no se encuentra gener un error