//requiero filesystem
const fs = require('fs');

//Defino lista de estudiantes
listaEstudiantes = [];

//Funciòn para crear el estudiante
const crear = (estudiante) => {
	listar();
	let est = {
		nombre: estudiante.nombre,
		matematicas: estudiante.matematicas,
		ingles: estudiante.ingles,
		programacion: estudiante.programacion
	};

	//Valido que no permita guardar duplicados
	let duplicado = listaEstudiantes.find(nom => nom.nombre === estudiante.nombre);
	if(!duplicado)
	{
		listaEstudiantes.push(est);

		console.log(listaEstudiantes);
		guardar();
	}
	else
	{
		console.log("Ya existe otro estudiante con ese nombre");
	}


}

//Función con la que obtengo el listado de estudiantes
const listar = () => {
	try{
		//Se puede usar require o JSON.parse

		//Require trae la variable y permanece más en el tiempo
		listaEstudiantes = require('./listado.json');

		//JSON.parse para manera asincrónica
		//listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
	} 
	catch(error){
		//Si no hay nada, inicia vacía
		listaEstudiantes = [];
	}
}

const guardar = () => {
	let datos = JSON.stringify(listaEstudiantes);
	fs.writeFile('listado.json', datos, (err)=>{
		if(err) throw (err);
		console.log('Archivo creado con éxito');
	})
}

module.exports = {
	crear
}