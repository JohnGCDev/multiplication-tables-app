const fs = require("fs");
const colors = require("colors");
const crearArchivoTabla = async(base = 5, tope, listar) => {
    try {
        if (listar) {
            console.log("=======================".green);
            console.log(`      Tabla del ${colors.bgGreen(base)}`);
            console.log("=======================".green);
        }
        let salida = "";
        let salidaTxt = "";
        for (let i = 1; i <= tope; i++) {
            salida += `${base}${"x".green}${i} ${"=".green} ${base * i}\n`;
            salidaTxt += `${base}x${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salidaTxt);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivoTabla,
};