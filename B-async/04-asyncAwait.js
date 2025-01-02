async function hola(nombre){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			console.log("Hola, " + nombre);
			resolve(nombre)
		},1000)
	});
}

async function hablar(nombre){
	return new Promise((resolve,reject) =>{
		setTimeout(function(){
			console.log("Blah "+ nombre +" blah blah blah blah blah...");
			//reject("No se puede hablar.")
			resolve(nombre)
		},1000)
	})
}

async function adios(nombre){
	return new Promise((resolve,reject) =>{
		setTimeout(function(){
			console.log("Adios, " + nombre);
			resolve(nombre);
		}, 1000)
	})
}

async function main(){
	let nombre = await hola('Andy');
	await hablar(nombre);
	hablar(nombre);
	await hablar(nombre);
	await adios(nombre);
	console.log("Terminado el  proceso!") 
}

console.log("Iniciando proceso...") 
main();
