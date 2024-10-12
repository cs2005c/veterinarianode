const archivo = require("fs");
let datamascotas = [];

const registrar = (Narchivo, Aparametros) => {
  datamascotas.push(Aparametros);
  archivo.writeFileSync(Narchivo, JSON.stringify(datamascotas));
  console.log("Data Grabada en Json");
};

const listar = () => {
  const Contenido = archivo.readFileSync("citas.json", "utf8");
  datamascotas = JSON.parse(Contenido);
  console.log("Nombre    Edad   Tipo   Color   Enfermedad");
  console.log("==========================================");
  datamascotas.forEach((mascota, index) => {
    console.log(
      mascota.nombre,
      "-",
      mascota.edad,
      "-",
      mascota.tipo,
      "-",
      mascota.color,
      "-",
      mascota.enfermedad
    );
  });
};

module.exports = { registrar, listar };
