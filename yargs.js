//Ejemplo para repositorio.

//Defino opciones
const nombre = {
	demand:true,
	alias:'n'
}

const matematicas = {
	demand:true,
	alias: 'm'
}

const ingles = {
	demand:true,
	alias: 'i'
}

const programacion = {
	demand : true,
	alias: 'p'
}

const creacion = {
	nombre,
	matematicas,
	ingles,
	programacion
}

//manejo de yargs
const argv = require('yargs')
	.command('crear','Crear un estudiante', creacion)
	.command('mostrar','Muestra el estudiante y sus notas')
	.argv;

//permito exportación de la función y la constante
module.exports = {
	argv
};