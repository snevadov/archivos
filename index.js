/*Requiere instalar yargs
Se instala en el repositorio con:
	> npm i yargs
*/

//Ejemplo para repositorio.
//Ejecuta con:
//node index crear -n Maria -m 3 -i 3 -p 5
const {argv} = require('./yargs');
const funciones = require('./funciones');

let comando = argv._[0];

//Llamo la función dependiendo del valor
if (argv._[0] == 'crear'){
	funciones.crear(argv);
}