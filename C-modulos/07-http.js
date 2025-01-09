const http = require('http')


function router(request,response){
	console.log('Nueva petición: ' + request.url) //mostrar la petición del usuario
	//escribir respuesta la usuario
	//response.write('Hola, ya sé usar http de node.js')
	//Escribiendo cabeceras
	//response.writeHead(201,{'Content-Type': 'text/html'})
	//terminar la respuesta (siempre se debe colocar al terminar lo que queremos comunicar)
	//response.end()

	switch(request.url){
		case '/hola': //url solicitada
			response.writeHead(201,{'Content-Type': 'text/plain'})
			response.write('Hola, que tal')
			response.end()
			break;
		default :
			response.writeHead(201,{'Content-Type': 'text/html'})
			response.write('<h1>Error 404</h1><p>No se lo que quieres</p>')
			response.end()
		
		break;
	}
}

const puerto = 3000

http.createServer(router).listen(puerto)


console.log(`Escuchando http en el puerto 3000 ingresa a: http://localhost:${puerto}`)