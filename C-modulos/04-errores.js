/* Al suceder un error en nodejs la ejecuci;on se para por completo donde se encuenre el error

con try/catch se puede manejar el error y hacer que la ejecución continue o termine a satisfacción

En el siguiente ejemplo si se quita el comentario a `//errorcito()` nunca se verá el aviso terminación correcta
*/

function errorcito(){
	return 3 + z
}

function errorAsync(cb){
	setTimeout(function () {
		try{
			return 3 + z
		} catch (err) {
			console.error('Salió mal en async!')
			cb(err)

		}
	}, 1000)
}

//errorcito()

try{
//	errorcito()
	errorAsync(function(err){
		console.warn(err.message)
		console.log(err)
	})
}catch (err){
	console.error('Algo salió mal!')
	console.warn(err.message);
	console.log(err);
}

console.log(">>> Terminando correctamente :) <<<");