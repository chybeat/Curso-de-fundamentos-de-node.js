function hola(nombre){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log("Hola, " + nombre);
			resolve(nombre)
		},1000)
	});
}

function hablar(nombre){
	return new Promise((resolve,reject) =>{
		setTimeout(function(){
			console.log("Blah "+ nombre +" blah blah blah blah blah...");
			reject("No se puede hablar.")
			//resolve(nombre)
		},1000)
	})
}

function adios(nombre){
	return new Promise((resolve,reject) =>{
		setTimeout(function(){
			console.log("Adios, " + nombre);
			resolve(nombre);
		}, 1000)
	})
}

console.log("Inciando el proceso...");

hola("Andy")
	.then (hablar)
	.then (adios)
	.then (() =>{
		console.log("Terminado el proceso");
	}). catch(error =>{
		console.log("Ooops. Existe un error")
		console.log(error)
	})