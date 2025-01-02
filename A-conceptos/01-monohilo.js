console.log("Hola mundo");

let i = 0;

setInterval(function(){
	console.log(i);
	// console.log("Sigo activo")
	i++
	if(i===5){
		console.log('forzamos error')
		var a = 3 + z;
	}
},1000)

console.log("segunda instrucción")