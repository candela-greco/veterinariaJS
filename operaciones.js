const fs = require("fs");

const filePath = "./citas.json";

const registrar = (nombre, edad, tipo, color, enfermedad) => {

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };

  data.push(nuevaCita);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

  console.log("¡Cita registrada con éxito!");
};

const leer = () => {

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  if (data.length === 0) {
    console.log("No hay citas registradas.");
  } else {
    console.log("Citas registradas:");
    data.forEach((cita, index) => {
      console.log(
        `${index + 1}. Nombre: ${cita.nombre}, Edad: ${cita.edad}, Tipo: ${cita.tipo}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`
      );
    });
  }
};

module.exports = { registrar, leer };
