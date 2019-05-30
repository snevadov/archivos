/*Requiere instalar express
Se instala en el repositorio con:
	> npm i express
Abre el puerto 3000: localhost:3000
*/
const express = require('express')
const app = express()

//Indica que se puede usar los archivos dentro de public
app.use(express.static(__dirname + '/public'))
 
app.listen(3000)