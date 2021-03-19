const argv = require("yargs")
    .options({
        b: {
            alias: "base",
            type: "number",
            demandOption: true,
            describe: "Es la base de la tabla de multiplicar"
        },
        l: {
            alias: "list",
            type: "boolean",
            demandOption: false,
            default: false,
            describe: "Muestra la tabla a crear en consola"
        },
        t: {
            alias: "tope",
            type: "number",
            demandOption: false,
            default: 12,
            describe: "Hasta que número se calculará la tabla dada una base"
        },
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base debe ser un número";
        }
        if (isNaN(argv.t) || argv.t <= 0) {
            throw "El tope debe ser un número mayor a 0";
        }
        return true;
    }).argv;

module.exports = argv;