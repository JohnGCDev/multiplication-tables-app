const { crearArchivoTabla } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");
console.clear();

// const [, , arg3 = 5] = process.argv;
// const [, base = 5] = arg3.split('=');

crearArchivoTabla(argv.b, argv.t, argv.l)
    .then((nombre) => console.log("Archivo", nombre.rainbow, "creado"))
    .catch(console.log);