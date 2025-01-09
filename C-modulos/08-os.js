const os = require('os')

// Arquitectura
console.log(os.arch())

//Plataforma
console.log(os.platform())

// CPU info
console.log(os.cpus())
console.log("Total de nucleos: " + os.cpus().length)

// Constantes de la variable OS
console.log(os.constants)

//Memoria
/** Funciones para pasar a otras medidas */
const SIZE = 1024
function kb(bytes){return bytes / SIZE}
function mb(bytes){return kb(bytes) / SIZE}
function gb(bytes){return mb(bytes) / SIZE}

console.log(os.freemem()) // memoria libre en bytes
console.log(kb(os.freemem()) + ' KB libres')
console.log(mb(os.freemem()) + ' MB libres')
console.log(gb(os.freemem()) + ' GB libres')

console.log(os.totalmem()) // memoria total en bytes
console.log(kb(os.totalmem()) + ' KB total')
console.log(mb(os.totalmem()) + ' MB total')
console.log(gb(os.totalmem()) + ' GB total')

//Directorios 
console.log(os.homedir()) //raiz del usuario
console.log(os.tmpdir()) //temporal

//datos de compu
console.log(os.hostname()) // nombre del compu
console.log(os.networkInterfaces()) // interfaces de redc