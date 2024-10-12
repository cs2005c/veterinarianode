const { registrar, listar } = require("./operaciones");

//const multiplicacion = require('./multiplicacion');

const accion = process.argv[2]; // Proceso
const nombreA = process.argv[3]; // Nombre Aninal
const edadA = process.argv[4]; // Edad
const TipoA = process.argv[5]; // Tipo Animal
const ColorA = process.argv[6]; // Color
const EnfermedadA = process.argv[7]; // Enfermedad

if (accion === "registrar") {
  listar();
  const nuevoObject = {
    nombre: nombreA,
    edad: edadA,
    tipo: TipoA,
    color: ColorA,
    enfermedad: EnfermedadA,
  };

  registrar("citas.json", nuevoObject);
} else if (accion === "listar") {
  console.log("Se Esta Listando la Agenda");
  listar();
}
