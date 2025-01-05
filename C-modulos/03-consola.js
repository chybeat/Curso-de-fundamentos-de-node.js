const objeto = [{
	nombre: 'Andy Bosch',
	telefono: 'Xiamoi 13 algo'
	},{
	nombre: 'Policarpa Salavarrieta',
	telefono: 'n/d'
}]

const arreglo = ['Maiz', 'Frijol', 'Soya', 'Pepino']

function funcion1(){
	console.group('>funcion 1:')
	console.log('Empezamos');
	console.log('Hacemos cosas y mostramos logs');
	funcion2();
	console.log('Terminada la función 1 :)');
}


function funcion2(){
	console.group('>funcion 2:')
	console.log('Se requiere un dato');
	console.log('Jugamos con el dato');
	console.log('Terminó sin error la funcion2 :)');
	console.groupEnd()

}

/* Texto o información en consola */ 
//console.log("El confiable y que muestra siempre todo")
//console.info("Muestra información ampliada, pero esto es avanzado. Por ahora solo muestra lo mismo que log ;)")
//console.error("Muestra el texto en color rojo, como si se tratase de un error")
//console.warn("Muestra el texto en color amarillo, como si se tratase de una advertencia")

/*Limpia la consola - genera visualizaciones algo extrañas con nodemon ;)*/
//console.clear();

/*muestra una tabla 'organizada' a partir de un objeto.*/
//console.table(objeto);
//console.table(arreglo);

/*
	permite agrupar mensajes mediante identación.
	console.groupEnd: finaliza la o identación.
*/

console.group('Conversación:');
console.log('Hola');
console.group('Parloteo:')
console.log('blah blah blah...');
console.log('blah blah blah...');
console.log('blah blah blah...');
console.groupEnd('Parloteo:')
console.log('Adios');
console.groupEnd('Conversación:');
// console.log('log de otra cosa...')

/* ejemplo de console.group con funciones
// funcion1();

/*console.count: inicia un contador autoincremental.*/
/*console.countReset: reinicia el contador a 0. */
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');


/*
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.

*/