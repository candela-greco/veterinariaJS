const { registrar, leer } = require("./operaciones");

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === "registrar") {

    const [nombre, edad, tipo, color, enfermedad] = args.slice(1);
  if (!nombre || !edad || !tipo || !color || !enfermedad) {
    console.log("Faltan datos. Debes ingresar: nombre, edad, tipo, color y enfermedad.");
    return;
  }
  registrar(nombre, edad, tipo, color, enfermedad);
  
} else if (operacion === "leer") {

    leer();
} else {
  console.log("Comando no reconocido. Usa 'registrar' o 'leer'.");
}
