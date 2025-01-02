function hola(nombre, miCallback){
	setTimeout(function(){
		console.log("Estoy siendo asincrona");
		console.log("Hola, " + nombre);
		miCallback(nombre)
	},2000)
}

function hablar(callbackHablar){
	setTimeout(function(){
		console.log("Blah blah blah blah blah blah...");
		console.log("Blah blah blah blah blah blah...");
		callbackHablar()
	},1000)
}

function adios(nombre,otrocallback){
	setTimeout(function(){
		console.log("Adios, " + nombre);
		otrocallback();
	}, 1000)

}

function conversacion(nombre,veces, callback){
	if(veces > 1){
		hablar(function(){
			conversacion(nombre, (-- veces ), callback)
		})
	}else{
		adios(nombre,callback)
	}
}


let user= "Andy"

console.log('Iniciando proceso...')

 hola(user, function(nombre){
	conversacion(nombre,3,function(){
		console.log('>>>>>>Terminando proceso...');
	})
 })

// hola(user, function(nombre){
// 	hablar(function(){
// 		hablar(function(){
// 			hablar(function(){
// 				adios(nombre, function(){
// 					console.log('>>>>>>Terminando proceso...');
// 				});
// 			});
// 		});
// 	});
// })

// hola(user, function(){})
// adios(user, function(){})