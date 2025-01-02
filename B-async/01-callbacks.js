function hola(nombre, miCallback){
	setTimeout(function(){
		console.log("Estoy siendo asincrona")
		console.log("Hola, " + nombre);
		miCallback(nombre)
	},2000)
}

function adios(nombre,otrocallback){
	setTimeout(function(){
		console.log("Adios, " + nombre)
		otrocallback()
	}, 1000)

}

let user= "Andy"

console.log('Iniciando proceso...')
hola(user, function(nombre){
	adios(nombre, function(){
		console.log('>>>>>>Terminando proceso...')
	})
})


// hola(user, function(){})
// adios(user, function(){})