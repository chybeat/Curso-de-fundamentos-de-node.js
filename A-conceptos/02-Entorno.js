/* En PowerShell para definir una variable se debe utilizar $env:<VARIABLE> */

/*
Las variables en MAYUSCULAS (se colocan así por buena practiva), ahcen referencia
a variales del sistema o variables de entorno
*/
let nombre = process.env.NOMBRE || 'usuario';
let web = process.env.WEB || '(No hay web registrada)';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);
console.log('Mi web , si hay, es ' + web);
/*
Visualizar cambios en tiempo real:

Nodemon
Instalación: `npm -install -g nodemon`
(Instalación global)
desde linux usar : nodemon <ruta/de/fichero.js>
desde WSL usar nodemon -L <ruta/de/fichero.js>
desde powershell se puede `usar npx nodemon <ruta/de/fichero.js`>

Sin instalar se puede usar: 
node --watch <ruta/de/fichero.js>

PM2 (para entornos de producción)
Instalación: `npm -install -g nodemon`
para inciar se puede usar:  `pm2 start <ruta/de/fichero.js `
para monitorizar se puede usar: `pm2 monitor`
para ver el estado actual de pm2 se puede ejecutar `pm2 status`
para ver los logs se puede usar: `pm2 logs` (esto no es muy util en versión de desarrollo)
para deterner se usa puede usar como paramero (ver desde `pm2 status`):
<ruta/de/fichero.js`>
id
name 
`npm stop <parametro>`
*/